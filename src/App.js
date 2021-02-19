import React from "react";
// import ReactDOM from "react-dom";

export default function App() {
    return (
        <div>
            <label className="label" for="name">
                Enter Name:
            </label>
            <input type="text" id="name" />
            <button style={{backgroundColor: 'blue', color: 'white'}}>Submit</button>
        </div>
    )
}