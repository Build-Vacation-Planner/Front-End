import React from "react";
import "./App.css";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./components/Login";
import Signup from "./components/Signup";
import PrivateRoute from './utils/PrivateRoute';
import CommentCard from "./components/CommentCard";
import ActivityCard from "./components/ActivityCard";
import VacationCard from "./components/VacationCard";

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
      <Route exact path="/" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/vacationcard" render={() => <VacationCard />} />   
      <Route path="/comments" render={() => <CommentCard />} />
      <Route path="/activity" render={() => <ActivityCard />} />
      </BrowserRouter>  
    </div>
  );
}

export default App;