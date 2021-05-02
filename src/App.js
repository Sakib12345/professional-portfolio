import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
function App() {
  return (
      <Router>
        <Switch>
        <Route path="/">
            <Home></Home>
        </Route>
        <Route path="/about">
            <Home></Home>
        </Route>
        </Switch>
      </Router>
  );
}

export default App;
