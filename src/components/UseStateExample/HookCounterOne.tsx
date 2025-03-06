"use client"

import React, { useState } from "react";

export default function HookCounterOne() {
  const [count, setCount] = useState(0);
  return (
   <div className=" items-center justify-center">
     <h1 className="mt-4  font-bold">Example Count One </h1>
     <div className="flex flex-row gap-2 ">
       
      <button className="bg-blue-200 p-2 w-8 h-8 rounded-full text-white font-bold items-center flex justify-center" onClick={()=>setCount(count+1)}>
        +
      </button>
      {count}
      <button className="bg-blue-200 w-8 h-8  p-2 rounded-full text-white font-bold flex items-center justify-center" onClick={()=>setCount(count-1)}>
        -
      </button>
    </div>
   </div>
  );
}
