import './App.css'
// import MyComponent from './MyComponent'
//import Counter from './Counter'
// import Say from './Say'
import Type from './Type'

function App() {
   // const name = 'react'
   // return <div className="react">{name}</div>
   // return (
   //    <MyComponent name="하서" job="강사" forNumber={1}>
   //       맑음
   //    </MyComponent>
   // )

   //return <Counter />

   //return <Say />

   return <Type str="react" num={200} bool={1 == 1} arr={[0, 1, 2]} json={{ react: '리액트', time: 2 }} func={alert('Hello function Props!')} />
}

export default App
