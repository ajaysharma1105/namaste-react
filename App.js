import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const heading = React.createElement(
    "h2",{id:"heading",xyz :"abc"},"Hello World from React!");
    const root = ReactDOM.createRoot(document.getElementById("root"));

    // JSX - HTML like syntax or XML like syntax
    // JSX is not HTML, it is a syntax extension for JavaScript
    // JSX is a syntax extension for JavaScript that looks similar to HTML
    // JSX is used to describe what the UI should look like
    // JSX (transpiled to JavaScriptbefore it reaches the JS engine) - PARCEL - babel
    // JSX => React.createElement("h1", {id: "heading"}, "Hello World from React!")
    // babel is a JavaScript compiler that converts JSX into JavaScript

    //React Element - React.createElement
    // React.createElement(type, props, children)
const jsxHeading = (<h1 id="heading" className="head">Hello World from React!</h1>);
const elem = <span>React Testing</span>
const title = (
    <h1 id="title" className="head">
        {elem}Hello World from React Ttile!</h1>
);

//React Component - function that returns a React element
//React functional component - function that returns a React element - New
//React class component - class that extends React.Component and has a render method that returns a React element - Old

//ReactFunctional Component
const HeadingComponent2= () =>  <h1 id="headingComponent2" className="head2">Hello World from React Functional Component2!</h1>;
const number= 100;
const HeadingComponent = () => (
     <div className="container">
        <HeadingComponent2/> 
        {/* //Component inside a component - Componenent composition */}
        {number}
        {title}
        {HeadingComponent2()}
        <h1 id="headingComponent" className="head">Hello World from React Functional Component!</h1>
    </div>
);





   
console.log(heading);
console.log(jsxHeading);
root.render(heading);
root.render(jsxHeading);  
root.render(<HeadingComponent/>);
//root.render(<HeadingComponent2 />);