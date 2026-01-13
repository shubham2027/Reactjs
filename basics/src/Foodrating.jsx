import React from 'react';
import './App.css';

function Foodrating(props) {
    return (
        <> 
            <div className='div'>
                <h1>Food Name: {props.name}, Rating: {props.rating}/5</h1>

            </div>
        </>
    )
}

export default Foodrating;
