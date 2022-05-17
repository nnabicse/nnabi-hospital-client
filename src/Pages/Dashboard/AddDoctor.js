import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch("http://localhost:5000/service").then(res => res.json()))

    const imageStorageKey = "541ed4ca926450e9c8220b028b87be5a";


    const onSubmit = async data => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append("avatar", image);
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
                <div>
                    <input className='btn w-full text-white' type="submit" value="Add" />
                </div>
            </form>
        </div>
    );
};

export default AddDoctor;