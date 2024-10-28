import { useDispatch, useSelector } from 'react-redux'
import { up } from './counterSlice'

function Counter() {
   const dispatch = useDispatch()
   const count = useSelector((state) => {
      console.log(state)
      return state.counter.value
   })

   return (
      <div>
         <button
            onClick={() => {
               dispatch(up(2))
            }}
         >
            +
         </button>
         {count}
      </div>
   )
}

export default Counter
