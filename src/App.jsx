import React from 'react'
import './App.css'
import Selfintro from './Selfintro'
import Userdetails from './Userdetails'
import ConditionalRendering from './component/conditionalrendering'
import ListRendering from './component/ListRendering'

export default function App() {
  const name1 = "yash"
  const city1 = "banglaore"
  const age1 = 23
  const email1 = "yash2786gmail.com"
  const phonenumber1 = "92742947294"
  const name2 = "raj"
  const city2 = "chennai"
  const age2 = 24
  const email2 = "raj2786gmail.com"
  const phonenumber2 = "927429472494"
  const name3 = "ravi"
  const city3 = "banglaore"
  const age3= 26
  const email3 = "ravi2786gmail.com"
  const phonenumber3 = "77942947294"
  const name4 = "kumar"
  const city4 = "agra"
  const age4 = 33
  const email4 = "kumar2786gmail.com"
  const phonenumber4 = "9433947294"
  const name5 = "jack"
  const city5 = "goa"
  const age5 = 24
  const email5 = "jack2786gmail.com"
  const phonenumber5 = "92433947294"
 




  return (
    <div>
      <ListRendering/>
      <ConditionalRendering />
      <Selfintro />
      <Userdetails name={name1} city={city1} age={age1} email={email1} phonenumber={phonenumber1}/>
      <Userdetails name={name2} city={city2} age={age2} email={email2} phonenumber={phonenumber2}/>
      <Userdetails name={name3} city={city3} age={age3} email={email3} phonenumber={phonenumber3}/>
      <Userdetails name={name4} city={city4} age={age4} email={email4} phonenumber={phonenumber4}/>
      <Userdetails name={name5} city={city5} age={age5} email={email5} phonenumber={phonenumber5}/>
    </div>
  )
}