import {useState} from 'react';


function Counter(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1);
    }
    return (
        <div>
            <h2>Counter Component: {count}</h2>
            <button onClick={increment}>Increment </button>
            <button onClick={()=>setCount(count-1)}> Decrement</button>  
        </div>
    );
}


export default Counter;
