import React from 'react';
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading';

const ManageDoctors = () => {
    const { data: doctors, isLoading, err } = useQuery('doctors', () => fetch("http://localhost:5000/doctor", {
        headers: {
            "authorization": `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>Manage Doctors: {doctors.length}</h2>
        </div>
    );
};

export default ManageDoctors;