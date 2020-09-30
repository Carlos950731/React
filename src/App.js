import React from 'react';
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Signup } from "./pages/Signup/Signup";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

export const App = () => {
  return (
    <div className="App">
    <Router>
      <Switch className="h-100">
        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
    </div>
  );
}

