import React, { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const ResetPass = () => {

    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    console.log(email);
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(
        auth
    );

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='card bg-base-100 shadow-xl p-20'>
                <div className='mb-10 text-center text-3xl text-primary font-bold'>
                    <h1>Reset Password</h1>
                </div>
                <div className='mb-5'>
                    <input className='input input-bordered w-full max-w-xs' type="email" placeholder='Please Enter Your Email' value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                            console.log(e.target.value)
                        }} />
                </div>
                <div className='text-center'>
                    <button class="btn w-full" onClick={async () => {
                        if (email) {
                            await sendPasswordResetEmail(email);
                            await Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Reset Email Sent',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            navigate('/login')


                        }
                        else {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'error',
                                title: 'Enter Email Adress',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    }}>Reset</button>
                </div>
            </div>
        </div>

    );
};

export default ResetPass;