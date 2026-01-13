function Button2(){
    function handleClick(){
        alert("Button 2 clicked!");
    }
    
    return (    
        <button onClick={handleClick}>Click Me</button>
    )
}


export default Button2;
