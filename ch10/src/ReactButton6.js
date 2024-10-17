import styled from 'styled-components'

const StyledButton = styled.button`
   color: white;
   background-color: green;
`
const LargeButton = styled(StyledButton)`
   font-size: 50px;
`
const ReactButton = (props) => {
   return <button className={props.className}>{props.children}</button>
}

const ReactLargeButton = styled(ReactButton)`
   font-size: 50px;
`

const PrimaryButton = styled.button`
   color: ${function (props) {
      console.log('props', props)
      if (props.primary) return 'white'
      else return 'blue'
   }};
`

/*
&는 현재 컴포넌트를 의미한다. 
가상 클래스(:hover, :focus, :active 등)나 가상 요소(::before, ::after 등)와 결합하여 특정 상태나 요소에 스타일을 적용할 수 있음
*/

/*
const PrimaryButton = styled.button`
   color: ${(props) => (props.primary ? 'white' : 'blue')};
   background-color: ${(props) => (props.primary ? 'orange' : 'skyblue')};

   &:hover {
      background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
`
*/

function ReactButton6() {
   return (
      <div>
         <StyledButton>버튼</StyledButton>
         <LargeButton>Large</LargeButton>
         <ReactButton>React</ReactButton>
         <ReactLargeButton>React Large</ReactLargeButton>
         <PrimaryButton>Normal</PrimaryButton>
         <PrimaryButton primary>Normal</PrimaryButton>
      </div>
   )
}

export default ReactButton6
