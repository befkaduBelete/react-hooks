"use client"
import React, { useState,useCallback  } from 'react'
interface Person {
    firstName : string;
    lastName: string;
}

export default function HookObject() {
    const [name, setName] = useState({firstName:'',lastName:''})


    const handleChange = useCallback( (key: keyof Person, value: string) => {
        setName((prev) => ({ ...prev, [key]: value }));
      },
      []
    );

  
  return (
    <div className='flex flex-col gap-3'>
    
      <input type="text" value={name.firstName}   className='border border-gray-400 p-2 rounded-md '
      onChange={e=>setName({...name,firstName: e.target.value})} />
      <input type="text" value={name.lastName}   className='border border-gray-400 p-2 rounded-md '
   
      
      onChange={(e) => handleChange("firstName", e.target.value)}
      />
       Your name is : {name.firstName} {name.lastName}
       {JSON.stringify(name)}
    </div>
  )
}
