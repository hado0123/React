import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`

function ReactButton2() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
      </div>
   )
}

export default ReactButton2
