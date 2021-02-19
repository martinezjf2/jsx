import React from "react";
import ReactDOM from "react-dom";
import App from "./App"


// Manually refreshing will show the changes, also, any changes to components deeper in the file structure will cause an auto-refresh as expected.

// One workaround noted suggests putting the following in the index.js which enables reloading:

// if (module.hot) {
//     module.hot.accept();
// }

ReactDOM.render(<App />, document.getElementById("root"))
