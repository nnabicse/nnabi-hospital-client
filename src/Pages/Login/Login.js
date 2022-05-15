
import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";
import './Login.css'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';


const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, socialUser, socialLoading, socialError] = useSignInWithGoogle(auth);
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    let signInError;
    let signInLoading;
    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };
    if (loading || socialLoading) {
        signInLoading = <div class="flex items-center justify-center">
            <button class="btn btn-square loading text-black bg-white border-0"></button>
        </div>
    }
    if (error || socialError) {
        signInError = <p className='text-red-500'>{error?.message || socialError?.message}</p>
    }
    if (socialUser || user) {
        console.log(socialUser || user);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    return (
        <div className='flex justify-center items-center h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
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
                                <span class="label-text">Password</span>
                            </label>
                            <input {...register("password", {
                                required: {
                                    value: true,
                                    message: "Password is Required"
                                },
                                minLength: {
                                    value: 6,
                                    message: 'Must be 6 Characters or Longer'
                                }
                            })} type="password" placeholder="Your Password" class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        {signInLoading}
                        <input className='btn w-full text-white' type="submit" value="Login" />
                        <small>New to NNABI Hospital? <Link to='/signup'><span className='text-primary'>Create New Account</span></Link></small>
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} class="btn btn-outline">Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;