import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

function AppTwo() {
    return <h1>Quynh la vo doi</h1>
}

ReactDOM.render(
    <React.Fragment>
        <App />
        <AppTwo />
    </React.Fragment>
    , document.getElementById("root")
);
