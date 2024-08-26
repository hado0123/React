import React, { useRef } from 'react'

function UseRefEx() {
   const inputRef = useRef(null)

   const handleClick = () => {
      // input 요소에 포커스를 설정합니다.
      inputRef.current.focus()
   }

   return (
      <div>
         {/* ref 속성에 inputRef를 할당하여 ref를 생성합니다. */}
         <input ref={inputRef} type="text" />
         <button onClick={handleClick}>Focus Input</button>
      </div>
   )
}

export default UseRefEx
