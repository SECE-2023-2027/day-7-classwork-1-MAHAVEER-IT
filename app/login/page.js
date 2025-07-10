'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = (e) => {
        e.preventDefault();
        let eemail = localStorage.getItem('email');
        let ppasword = localStorage.getItem('password');

        if (!email || !password) {
            alert('All fields are required!');
            return;
        }else if (email == eemail && password == ppasword) {
            localStorage.setItem('authenticated',true);
            console.log("Login SuccessFully");
            router.push('/login/home');
        } else{
            console.console("login fail")
        }
    }

    return (

        <center className='py-20'>
            <div className='h-80 w-150 px-10 py-10 bg-blue-500 rounded-2xl'>
                <form className='flex flex-col gap-5 justify-center items-center'>
                    <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => setEmail(e.target.value)} className='outline outline-2 outline-white w-120 h-10 rounded-2xl' />
                    <input type='password' placeholder='Enter Your Password' value={password} onChange={(e) => setPassword(e.target.value)} className='outline outline-2 outline-white w-120 h-10 rounded-2xl' />
                    <button onClick={handleLogin} className='bg-amber-300 hover:cursor-pointer active:bg-amber-600 rounded-xl px-5 text-black w-100 h-10'>Login</button>
                </form>
            </div>
        </center>

    )
}

export default Login