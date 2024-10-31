// text 출력
// https://mui.com/material-ui/react-typography/#component
// https://m2.material.io/design/typography/the-type-system.html#type-scale

import { Typography } from '@mui/material'

function MUI3() {
   return (
      <div>
         {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
         <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" /> */}

         <Typography variant="h1">헤더 1</Typography>
         <Typography variant="body1">본문 텍스트</Typography>
      </div>
   )
}

export default MUI3
