import { Provider } from 'react-redux'

import Counter from './ToolkitCouter/Counter'
import store from './ToolkitCouter/store'
import User from './ToolkitCouter/User'

function App() {
   return (
      <Provider store={store}>
         <div>
            <Counter />
            <br />
            <br />
            <User />
         </div>
      </Provider>
   )
}

export default App
