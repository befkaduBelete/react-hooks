"use client"
import React, { useState } from 'react'

export default function HookAsync() {

 const [number, numberSet] = useState(0)
 const increment = ()=>{
    numberSet(number+1)
 }
 const IncrementAsync = ()=>{
   setTimeout(()=>{
    numberSet(number+1)
   },2000)
 }
  return (
    <div className='flex flex-col gap-5 justify-center'>
        
       <button className='bg-blue-600 p-2 rounded-md' onClick={increment}>Increment</button>
       <button className='bg-blue-600 p-2 rounded-md' onClick={IncrementAsync}>A Increment</button>
       {number}
    </div>
  )
}
