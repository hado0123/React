import React, { useState } from 'react';

function InputText() {
    const [text, setText] = useState("");

    return (
        <div>
        <input 
            type="text" 
            value={text}
            //change 이벤트: input, select, 체크박스, 라디오 버튼 등의 상태가 변경되었을때 발생하는 이벤트    
            onChange={(e) => setText(e.target.value)}
        />
        <p>입력한 값: {text}</p>
        </div>
    )
}

export default InputText;