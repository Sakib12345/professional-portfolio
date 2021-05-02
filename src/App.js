import React ,{useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar";
function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggle  = () => {
      setIsOpen(!isOpen)
  }

  return (
    <Router>
  <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
      <Switch>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
  </Router>
  );
}

export default App;
