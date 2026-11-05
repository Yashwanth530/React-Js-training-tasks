import React from 'react'

export default function Userdetails({name,city,age,email,phonenumber}) {
  return (
    <div>
      <h2>name:{name}</h2>
      <h2>city:{city}</h2>
      <h2>age:{age}</h2>
      <h2>email:{email}</h2>
      <h2>phonenumber:{phonenumber}</h2>
    </div>
  )
}
