import React, { useReducer } from 'react'

function ReducerCounter2() {
   const [count, countDispatch] = useReducer(countReducer, 0)

   function countReducer(oldCount, action) {
      if (action === 'UP') {
         return oldCount + 1
      } else if (action === 'DOWN') {
         return oldCount - 1
      } else if (action === 'RESET') {
         return 0
      }
   }

   function down() {
      countDispatch('DOWN')
   }

   function reset() {
      countDispatch('RESET')
   }

   function up() {
      countDispatch('UP')
   }

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter2
