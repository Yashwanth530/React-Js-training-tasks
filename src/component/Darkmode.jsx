import React, { useState } from 'react'

export default function Darkmode() {
    const[dark, setdark] = useState(false)
  return (
    <div style={{backgroundColor: dark ? "black" : "white" ,
     color:dark ? "white" : "black" ,
      padding: "20px", }}>
        <button onClick={()=>setdark(!dark)}>switch to {dark? "black" : "white" } mode</button>
        <h2>you are in {dark? "black" :"white" } mode</h2>
      
    </div>

  )
}
