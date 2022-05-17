import React from 'react';
import Swal from 'sweetalert2'

const UserRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://shrouded-journey-04696.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    Swal.fire({
                        position: 'top-end',
                        icon: 'error',
                        title: 'Faild to Make Admin',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
                return res.json()
            })
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Made Admin Successfull',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }

            })
    }
    return (
        <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== "admin" && <button class="btn btn-xs" onClick={makeAdmin}>Make Admin</button>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
    );
};

export default UserRow;