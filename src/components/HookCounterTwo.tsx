"use client"
import React, { useState } from "react";
export default function HookCounterTwo() {
  const initial: number = 0;
  const [count, setCount] =useState(initial)
  function incrementByFive(){
    for(let i=0;i<5;i++){
        setCount(perv =>perv + 1)
    }
    console.log("Number increment by Five");

  }
  return (
    <div>
      <p className="text-3xl text-red-500 font-semibold">{count}</p>
      <div className="flex flex-row gap-2 ">
        <button className="w-fit p-2 rounded-md bg-gray-500" onClick={()=>setCount(initial)}>Resat</button>
        <button className="w-fit p-2 rounded-md bg-gray-500" onClick={()=>setCount(perv =>perv + 1)}>+</button>
        <button className="w-fit p-2 rounded-md bg-gray-500" onClick={()=>setCount(perv =>perv - 1)}>-</button>
        <button className="w-fit p-2 rounded-md bg-gray-500" onClick={incrementByFive}>+5</button>
      </div>
    </div>
  );
}
