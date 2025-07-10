'use client'
import React,{useState} from 'react'

function Count() {
    const [count, setCount] = useState(0)
  return (
    <div className='flex flex-col text-3xl justify-center items-center gap-3 px-10 py-10'>
        <div className='text-3xl font-bold'>{count}</div>
        <button onClick={()=>{setCount(count+1)}} className='bg-green-500 active:bg-green-700 rounded-xl hover:cursor-pointer px-3 py-3'>Click</button>
    </div>
  )
}

export default Count