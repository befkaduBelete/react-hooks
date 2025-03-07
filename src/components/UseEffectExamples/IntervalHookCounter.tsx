/* eslint-disable react-hooks/exhaustive-deps */
"use client"
import React, { useEffect, useState } from 'react'

const IntervalHookCounter = () => {
const [count,setCount] =useState(0)

const tick = () =>{
    setCount(pcount=>pcount  +1 )
}

useEffect(()=>{
const  interval  = setInterval(tick,1000)
return () =>{
    clearInterval(interval)
}

},[])
  return (
    <div>
      {count}
    </div>
  )
}

export default IntervalHookCounter
