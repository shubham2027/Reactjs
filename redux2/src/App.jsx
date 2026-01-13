import { useSelector, useDispatch} from 'react-redux'
import { increment, decrement } from './counterSlice.js'

import './App.css'

function App() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
    
    <button onClick={()=>dispatch(decrement())}>-</button>
    {count}
    <button onClick={()=>dispatch(increment())}>+</button>
    

    </>
  )
}

export default App
