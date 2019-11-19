import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/signup" render={() => <Signup />} />
      </BrowserRouter>  
    </div>
  );
}

export default App;