import React, { useState } from 'react'

export default function Usestatehook() {
    const[count,setcount]=useState(0)
  return (
    
    <div>
      <h2>count:{count}</h2>
      <button onClick={()=>setcount(count+1)}>Increase</button>
      <button onClick={()=>setcount(count-1)}>Decrease</button>
      <button onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}
