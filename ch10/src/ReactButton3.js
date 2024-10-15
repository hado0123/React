import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`

function ReactButton3() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
      </div>
   )
}

export default ReactButton3
