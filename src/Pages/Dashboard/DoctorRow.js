import React from 'react';
import Swal from 'sweetalert2'

const DoctorRow = ({ doctor, index, refetch }) => {
    const { name, specialty, img, email } = doctor
    const handleDelete = (email) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/doctor/${email}`, {
                    method: "DELETE",
                    headers: {
                        "authorization": `Bearer ${localStorage.getItem("accessToken")}`
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        else {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Deletion Failed',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        refetch();
                    })
            }
        })







    }




    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src={img} alt={name} />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td><button onClick={() => handleDelete(email)} class="btn btn-xs btn-error">Delete</button></td>
        </tr>
    );
};

export default DoctorRow;