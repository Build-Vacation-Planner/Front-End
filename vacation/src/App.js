import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from './utils/PrivateRoute';
import CommentCard from "./components/CommentCard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" component={Login} />
      <Route path="/signup" render={() => <Signup />} />

      {/* <PrivateRoute 
        exact path='/protected' 
        component={vacationDashboard} 
        /> */}

      {/* <PrivateRoute 
        exact path='/protected/:id' 
        component={} 
         /> */}
         
      <Route path="/comments" render={() => <CommentCard />} />
      </BrowserRouter>  
    </div>
  );
}

export default App;