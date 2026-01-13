import React, { useReducer } from 'react'

const Counter = () => {
    const reducer = (state, action) =>{
        switch(action.type){
            case 'INCREMENT':
                return state + 1;
            case 'DECREMENT':
                return state - 1;   
            default:
                return state;        
        }
    }

    const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={()=>dispatch({type: "DECREMENT"})}>-</button>
      <p>{count}</p>
      <button onClick={()=>dispatch({type: "INCREMENT"})}>+</button>
    </div>
  )
}

export default Counter
