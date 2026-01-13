// date -> 3 / November / 2025 (class component, react props)

// Props in reactjs

    // Why do we use props?
        // Props are used to pass data from one component to another component in reactjs.
        // Props are used to make components reusable.
        // Props are used to make components dynamic.

        // function Welcome(props){
        //     return <h2>Welcome, {props.name}!</h2>
        // }
        // export default Welcome;
        // In the above example, we are passing the name prop to the Welcome component.
        // We can use the Welcome component in other components and pass different name props to it.

// Class component in reactjs
    // definition - A class component is a component that is defined using a JavaScript class. It extends the React.Component class and has a render() method that returns the JSX to be rendered.

// Functional component in reactjs
    // definition - A functional component is a component that is defined using a JavaScript function. It returns the JSX to be rendered.

//difference b/w class component and functional component
    // Class components can have state and lifecycle methods.
    // Functional components cannot have state and lifecycle methods (before hooks).
    // Class components are more complex and require more code to define.
    // Functional components are simpler and require less code to define.
    // With the introduction of hooks, functional components can now have state and lifecycle methods.  

    // what is jsx 
    // definition - JSX is a syntax extension for JavaScript that allows us to write HTML-like code in our JavaScript files. JSX is used to describe the UI of our components in a declarative way.
// CSS in React
    // In reactjs, we can use CSS to style our components. We can use inline CSS, internal CSS, and external CSS to style our components.


    // internal css in react - definition - Internal CSS is defined within the same file as the component using a <style> tag or a JavaScript object.

    // external css in react - (applied to all over the file where it is imported) definition - External CSS is defined in a separate CSS file and imported into the component file.

    // module css in react - (can be applied to any particular tag in app.jsx) definition - CSS Modules are a way to scope CSS by automatically creating a unique class name. This helps to avoid class name collisions and makes it easier to manage styles in large applications.

// Event handling in React
    // In reactjs, we can handle events using event handlers. Event handlers are functions that are called when an event occurs. We can use event handlers to handle events such as click, change, submit, etc.
    // in html the code is written in lowercase but in reactjs the code is written in camelCase.

    // Example of event handling in reactjs
        // function handleClick(){
        //     alert("Button clicked!");
        // }

// state in React
    // definition - State is a built-in object that is used to store data that can change over time. State is used to make components dynamic and interactive.
    // In class components, state is managed using this.state and this.setState() method.
    // In functional components, state is managed using the useState() hook.

// Event Handling 
    // In reactjs, we can handle events using event handlers. Event handlers are functions that are called when an event occurs. We can use event handlers to handle events such as click, change, submit, etc.

    // <button onclick="handleClick()">Click me</button> //in html
    // <button onClick={handleClick}>Click me</button> //in reactjs

// useState Hook
    // definition - The useState hook is a built-in hook that is used to manage state in functional components. It returns an array with two elements: the current state value and a function to update the state value.

    // Example of useState hook
        // import React, { useState } from 'react';
        // function Counter(){
        //     const [count, setCount] = useState(0);
        //     function increment(){
        //         setCount(count + 1);
        //     }
        //     return (
        //         <div>
        //             <h2>Count: {count}</h2>
        //             <button onClick={increment}>Increment</button>
        //         </div>
        //     );
        // }
        // export default Counter;


// Component Lifecycle 
    // Every React component goes through a lifecycle of events from its creation to its removal from the DOM. The main phases of the component lifecycle are Mounting, Updating, and Unmounting.
    // lifecycle = Creating -> Updating -> Destroying


    // componentDidMount()
        // definition - componentDidMount() is a lifecycle method that is called after a component is mounted (inserted into the DOM). It is used to perform any setup that requires DOM nodes, such as fetching data from an API or setting up event listeners.    
        // Example of componentDidMount()
        // class MyComponent extends React.Component {
        //     componentDidMount() {
        //         console.log('Component has been mounted');
        //     }
        //     render() {
        //         return <div>Hello, World!</div>;
        //     }
        // }

    // componentWillUnmount()
        // definition - componentWillUnmount() is a lifecycle method that is called just before a component is unmounted and destroyed. It is used to perform any necessary cleanup, such as invalidating timers, canceling network requests, or removing event listeners that were added in componentDidMount().
        // Example of componentWillUnmount()
        // class MyComponent extends React.Component {
        //     componentWillUnmount() {
        //         console.log('Component is about to be unmounted');
        //     }
        //     render() {
        //         return <div>Hello, World!</div>;
        //     }
        // }

        // Example of both componentDidMount and componentWillUnmount
        // class MyComponent extends React.Component {
        //     componentDidMount() {
        //         console.log('Component has been mounted');
        //     }
        //     componentWillUnmount() {
        //         console.log('Component is about to be unmounted');
        //     }
        //     render() {
        //         return <div>Hello, World!</div>;
        //     }
        // }


// hooks 
    // definition - Hooks are special functions that allow you to "hook into" React features. They let you use state and other React features without writing a class component.
    
    // Example of a hook - useState, useEffect, useContext, etc.
    
    // useEffect - The useEffect hook lets you perform side effects in function components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount in React classes, but unified into a single API.

    // createContext - The createContext hook is used to create a context object. A context object is used to share data between components without passing props down manually at every level.
    
    // useContext - The useContext hook is used to consume a context object. It allows you to access the context value in a functional component. it is globally accessible between components without passing props down manually at every level.

    // useRef - It has access DOM elements directly or to store mutable values that do not trigger re-renders when updated.

    // useReducer - The useReducer hook is used for managing complex state logic in a functional component. It is an alternative to useState and is particularly useful when the state logic involves multiple sub-values or when the next state depends on the previous one.

    //useCallback - prevents the recreation of functions during re-renders. It returns a memoized version of the callback function that only changes if one of the dependencies has changed. This is useful for optimizing performance by preventing unnecessary re-renders of child components that rely on the callback function.
    
    // useMemo - memorizes the values so that they are not recalculated on every render. It returns a memoized value that only changes if one of the dependencies has changed. This is useful for optimizing performance by preventing expensive calculations on every render.

// controlled vs uncontrolled components
    // Controlled components - can access the input value via state management.
    // In a controlled component, the form data is handled by the React component. The component's state is the "single source of truth" for the input values. The input values are set using the value attribute and updated using the onChange event handler.
        // example  - useref() hook is used to access the input value directly from the DOM, making it an uncontrolled component.
    
    // Uncontrolled components - In an uncontrolled component, the form data is handled by the DOM itself. The input values are accessed using refs. The input values are not set using the value attribute and are not updated using the onChange event handler.


//http in reactjs
    // In reactjs, we can make HTTP requests using the fetch() API or axios library. We can use these to perform CRUD operations (Create, Read, Update, Delete) on data from a server.

    // http methods
        // GET - The GET method is used to retrieve data from a server.
        // POST - The POST method is used to send data to a server to create a new resource.
        // PUT - The PUT method is used to update an existing resource on a server.
        // DELETE - The DELETE method is used to delete a resource from a server.

    // fetch() API - The fetch() API is a built-in JavaScript API that is used to make HTTP requests. It returns a promise that resolves to the response of the request.

    // npm install axios
    // axios - Axios is a popular JavaScript library that is used to make HTTP requests. It is built on top of the XMLHttpRequest API and provides a simple and easy-to-use API for making HTTP requests.

// Routing in React
    // In reactjs, we can use the react-router-dom library to implement routing in our application. Routing allows us to navigate between different components and pages in our application without reloading the entire page.
    
// Movie explorer app: 
    // create an app with these pages
    // /movies -> show a list of movie title
    // /movies/:id -> show details of a particular movie
    // favorites -> show a list of favorite movies

//Requirement: 
    // Clicking on a movie should open /movies/:id page with details of that movie.
    // add a add to favorites button on -> send movie data using navigation state
    // show favorite movies on /favorites page


// To setup routing in react app and create link to navigate b/w pages, passing data via url query parameters.
// Write a program to create a custom hook that fetches data from an API and demonstrate how it is reused across multiple components.
// Write a program to use fetch api to make a get request to retrieve a list of users and display them in a react component.
