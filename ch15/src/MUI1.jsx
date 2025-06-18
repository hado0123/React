// 기본 MUI 사용
// https://mui.com/material-ui/react-button/#basic-button

import Button from '@mui/material/Button'

function MUI1() {
   return (
      <>
         <Button
            variant="text"
            size="large"
            onClick={() => {
               alert('버튼 클릭')
            }}
         >
            Text
         </Button>
         <Button variant="contained" disabled size="medium">
            Contained
         </Button>
         <Button variant="outlined" size="small">
            Outlined
         </Button>
      </>
   )
}

export default MUI1
