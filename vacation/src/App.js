import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from './utils/PrivateRoute';
import CommentCard from "./components/CommentCard";
import ActivityCard from "./components/ActivityCard";
import Vacation from "./components/Vacation";


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <PrivateRoute 
          exact path='/vacation' 
          component={Vacation} 
          />

        <PrivateRoute 
          exact path='/commentcard/:id' 
          component={CommentCard} 
          />

        <PrivateRoute 
          exact path='/activitycard/:id' 
          component={ActivityCard} 
          />
          
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      
      </BrowserRouter>  
    </div>
  );
}

export default App;