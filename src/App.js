import React from "react";
// import ReactDOM from "react-dom";

export default function App() {

    const buttonText = 'Click Me!'
    return (
        <div>
            <label className="label" htmlFor="name">
                Enter Name:
            </label>
            <input type="text" id="name" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>{buttonText}</button>
        </div>
    )
}