import React, { useState } from 'react'

const EventPractice = () => {
   const [username, setUsername] = useState('')
   const [message, setMessage] = useState('')

   // username의 state 값을 바꾼다
   const onChangeUsername = (e) => setUsername(e.target.value)

   // message의 state 값을 바꾼다
   const onChangeMessage = (e) => setMessage(e.target.value)

   const onClick = (e) => {
      alert('첫번째 입력값:' + username + ', 두번째 입력값:' + message)
      setUsername('')
      setMessage('')
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChangeUsername} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />

         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default EventPractice
