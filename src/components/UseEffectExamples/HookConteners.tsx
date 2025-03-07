"use client"
import React, { useState } from 'react'
import HookMouse from './HookMouse'

const HookConteners = () => {
 const [display, setDesplay] =useState(false)
  return (
    <div>
      <button onClick={()=>setDesplay(!display)}> Display </button>
      {display && <HookMouse/>}
    </div>
  )
}

export default HookConteners
