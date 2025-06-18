// 테마 변경
// https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme

// 컬러 팔레트
// https://mui.com/material-ui/customization/palette/

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'

// 새로운 테마 생성
const theme = createTheme({
   palette: {
      primary: {
         main: '#000',
      },
      secondary: {
         main: '#dc004e',
      },
   },
})

function MUI5() {
   return (
      //  생성한 테마를 적용
      <ThemeProvider theme={theme}>
         <Button color="primary" variant="contained">
            Primary 버튼
         </Button>
         <Button color="secondary" variant="outlined">
            Secondary 버튼
         </Button>
      </ThemeProvider>
   )
}

export default MUI5
