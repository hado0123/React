import Counter from './NonTooklit/Counter'
import { Provider } from 'react-redux'
// import storeNonToolkit from './NonTooklit/store'
import storeUseToolkit from './UseToolkit/store'

function App() {
   // return (
   //    <Provider store={storeNonToolkit}>
   //       <div>
   //          <Counter />
   //       </div>
   //    </Provider>
   // )

   return (
      <Provider store={storeUseToolkit}>
         <div>
            <Counter />
         </div>
      </Provider>
   )
}

export default App
