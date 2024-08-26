import React, { useState } from 'react'

const IterationSample6 = () => {
   const [names, setNames] = useState([
      { id: 1, text: '눈사람' },
      { id: 2, text: '얼음' },
      { id: 3, text: '눈' },
      { id: 4, text: '바람' },
   ])

   const [inputText, setInputText] = useState('')
   const [nextId, setNextId] = useState(5)

   const onChange = (e) => setInputText(e.target.value)

   //concat() 2개 이상의 배열을 합치는 메소드

   const onClick = () => {
      const nextNames = names.concat({
         id: nextId, //nextId값을 id로 설정하고
         text: inputText,
      })

      setNextId(nextId + 1) //nextId에 1을 더해준다
      setNames(nextNames) //names 값을 업데이트 한다
      setInputText('') //inputText를 비운다
   }

   const onRemove = (id) => {
      const nextNames = names.filter((name) => name.id !== id)
      setNames(nextNames)
   }

   const namesList = names.map((name) => (
      <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
         {name.text}
      </li>
   ))

   return (
      <>
         <input value={inputText} onChange={onChange}></input>
         <button onClick={onClick}>추가</button>
         <ul>{namesList}</ul>
      </>
   )
}

export default IterationSample6
