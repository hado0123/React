//테마 변경
// https://mui.com/material-ui/customization/theming/#createtheme-options-args-theme

// 컬러 팔레트
// https://mui.com/material-ui/customization/palette/

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Button } from '@mui/material'

const theme = createTheme({
   palette: {
      primary: {
         main: '#1976d2', // 기본 파란색
      },
      secondary: {
         main: '#dc004e', // 기본 빨간색
      },
   },
})

export default function MUI5() {
   return (
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
