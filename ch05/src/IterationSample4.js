import React, { useState } from 'react'

const IterationSample4 = () => {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')

   const onChange = (e) => setInputText(e.target.value)
   const namesList = names.map((name) => <li key={name.id}>{name.text}</li>)

   return (
      <>
         <input value={inputText} onChange={onChange}></input>
         <ul>{namesList}</ul>
      </>
   )
}

export default IterationSample4
