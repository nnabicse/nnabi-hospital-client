import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Swal from 'sweetalert2'

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch("http://localhost:5000/service").then(res => res.json()))

    const imageStorageKey = "804c181e01c2839aad99e55be253bee5";


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("image", image);
        const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
        fetch(url, {
            method: "POST",
            body: formData

        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    const img = result.data.url;
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        img: img
                    }

                    fetch("http://localhost:5000/doctor", {
                        method: "POST",
                        headers: {
                            "content-Type": "application/json",
                            "authorization": `Bearer ${localStorage.getItem("accessToken")}`

                        },
                        body: JSON.stringify(doctor)

                    })
                        .then(res => res.json())
                        .then(inserted => {
                            if (inserted.insertedId) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Doctor Added Successfully',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                                reset();
                            }
                            else {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'error',
                                    title: 'Failed to Add Doctor',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })


                }
            })


    };

    if (isLoading) {
        <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <input {...register("name", {
                        required: {
                            value: true,
                            message: "Name is Required"
                        }
                    })} type="text" placeholder="Your Name" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name.message}</span>}
                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Email is Required"
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                            message: 'Provide a Valid Email'
                        }
                    })} type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" />
                    <label class="label">
                        {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}

                    </label>
                </div>
                <div class="form-control w-full max-w-xs">
                    <label class="label">
                        <span class="label-text">Specialty</span>
                    </label>

                    <select {...register("specialty")} class=" input-bordered select w-full max-w-xs">
                        {
                            services?.map(service => <option
                                key={service._id}
                                value={service.name}
                            >{service.name}</option>)
                        }
                    </select>
                </div>
                <div>
                    <div class="form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text">Photo</span>
                        </label>
                        <input {...register("image", {
                            required: {
                                value: true,
                                message: "Image is Required"
                            }
                        })} type="file" class="input input-bordered w-full max-w-xs" />
                        <label class="label">
                            {errors.image?.type === 'required' && <span class="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>
                </div>
                <div className='form-control w-full max-w-xs'>
                    <input className='btn w-full text-white' type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;