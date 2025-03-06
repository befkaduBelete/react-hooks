"use client"
import React, { useEffect, useState } from 'react'

const CountExampleOne = () => {
const [count , setCount] =useState(0);

useEffect(()=>{
  document.title =`You clicked ${count} times`  
},[count])
  return (
    <div>
      <button className='bg-blue-300 p-2 rounded-md' onClick={()=>setCount(count +1)}>+ {count}</button>
    </div>
  )
}

export default CountExampleOne
