'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();

         if (!name || !email || !password) {
            alert('All fields are required!');
            return;
        }

        localStorage.setItem('username', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        router.push('/login')
    }
    return (
        <center className='py-20'>
            <div className='h-110 w-150 px-10 py-10 bg-blue-500 rounded-2xl'>
                <form className='flex flex-col gap-5 justify-center items-center'>
                    <label>UserName: </label>
                    <input type='text' placeholder='enter name' id='name' name='name' value={name} onChange={(e) => { setName(e.target.value) }} className='outline outline-2 outline-white w-120 h-10 rounded-2xl' />
                    <label>Email: </label>
                    <input type='email' placeholder='enter email' id='email' name='email' value={email} onChange={(e) => { setEmail(e.target.value) }} className='outline outline-2 outline-white w-120 h-10 rounded-2xl' />
                    <label>Password: </label>
                    <input type='password' placeholder='enter password' id='password' name='password' value={password} onChange={(e) => { setPassword(e.target.value) }} className='outline outline-2 outline-white w-120 h-10 rounded-2xl' />
                    <button type='submit' className='bg-amber-300 hover:cursor-pointer active:bg-amber-600 rounded-xl px-5 text-black w-100 h-10' onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </center>

    )
}

export default RegisterPage