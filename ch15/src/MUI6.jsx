// icon 사용
// https://mui.com/material-ui/icons/
// https://mui.com/material-ui/material-icons/
// https://mui.com/material-ui/api/icon-button/

import IconButton from '@mui/material/IconButton'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled'
import AddToQueueIcon from '@mui/icons-material/AddToQueue'

function MUI6() {
   return (
      <>
         <AccessTimeFilledIcon />
         <AddToQueueIcon />
         <br />
         <IconButton color="secondary" aria-label="시계">
            <AccessTimeFilledIcon />
         </IconButton>
      </>
   )
}

export default MUI6
