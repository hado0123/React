import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
const ReactButton = (props) => {
   console.log('props:', props)
   return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

function ReactButton5() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
      </div>
   )
}

export default ReactButton5
