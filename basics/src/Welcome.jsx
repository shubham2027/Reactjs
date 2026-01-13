// using class components to create a welcome message component
import React, {Component} from 'react'; // Importing React and Component from 'react'

// This component is a simple React component that displays a welcome message.
// It can be used to greet users when they visit the application.

class Welcome extends Component{
    render(){
        return <h2>Welcome, Learner!</h2>
    }
}

export default Welcome;

// This component can be used in other parts of the application to display a welcome message.
// It can be imported and used in files like App.jsx or any other component file as needed.

// use props here 
