import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
const ReactButton = (props) => {
   return <button>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton4() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </div>
   )
}

export default ReactButton4
