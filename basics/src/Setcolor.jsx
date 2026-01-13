import {useState} from 'react'


function Setcolor(){
    const [color, setColor] = useState('red');

    // Simple toggle between two colors (easy to understand)
    const handleChange = () => setColor(prev => (prev === 'red' ? 'blue' : 'red'));

    return (
        <div>
            <h2 style={{ color }}>{`This is a ${color} text`}</h2>
            <button onClick={handleChange}>Change color</button>
        </div>
    );
}

export default Setcolor;

