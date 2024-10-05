import React, { useState } from 'react'

const EventPractice2 = () => {
   //form의 초기값은 json객체 저장(username, message가 빈문자열)
   const [form, setForm] = useState({
      username: '',
      message: '',
   })

   const { username, message } = form

   const onChange = (e) => {
      const nextForm = {
         ...form, //기존의 form 내용을 복사한 뒤
         [e.target.name]: e.target.value, //원하는 값을 덮어씌운다
      }

      setForm(nextForm) //덮어씌운 값으로 상태변화시킴
   }

   const onClick = () => {
      //클릭시 username, message값 출력후 username, message값 비워줌
      alert(`첫번째 입력값: ${username}, 두번째 입력값: ${message}`)
      setForm({ username: '', message: '' })
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="username" placeholder="아무거나 입력" value={username} onChange={onChange} />

         <input type="text" name="message" placeholder="아무거나 입력" value={message} onChange={onChange} onKeyDown={onKeyDown} />

         <button onClick={onClick} disabled={!username || !message}>
            확인
         </button>
      </div>
   )
}

export default EventPractice2
