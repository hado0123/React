import './App.css'
import React, { useState } from 'react'

function Left1(props) {
   return (
      <div>
         <h1>Left1</h1>
         <Left2></Left2>
      </div>
   )
}

function Left2(props) {
   return (
      <div>
         <h1>Left2</h1>
         <Left3></Left3>
      </div>
   )
}

function Left3(props) {
   return (
      <div>
         <h1>Left3</h1>
      </div>
   )
}

function Right1(props) {
   return (
      <div>
         <h1>Right1</h1>
         <Right2></Right2>
      </div>
   )
}

function Right2(props) {
   return (
      <div>
         <h1>Right2</h1>
         <Right3></Right3>
      </div>
   )
}

function Right3(props) {
   return (
      <div>
         <h1>Right3</h1>
         <input type="button" value="+" />
      </div>
   )
}

function App() {
   const [number, serNumber] = useState(1)
   return (
      <div className="container">
         <h1>Root:{number}</h1>
         <div className="grid">
            <Left1 number={number}></Left1>
            <Right1></Right1>
         </div>
      </div>
   )
}

export default App
