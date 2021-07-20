import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

//const element = <h1>Hello from Create React App</h1>
import TodoContainer from './components/TodoContainer'
//stylesheet
import "./App.css"

ReactDOM.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
  , document.getElementById("root"));
