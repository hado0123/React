// 커스터마이징 한 CSS 적용방법 1: 전통적인 CSS 적용

import './App.css'
import Button from '@mui/material/Button'

function MUI2_1() {
   return (
      <div>
         <Button className="btn1" variant="text">
            Text
         </Button>
         <Button className="btn2" variant="contained">
            Contained
         </Button>
         <Button className="btn3" variant="outlined">
            Outlined
         </Button>
      </div>
   )
}

export default MUI2_1
