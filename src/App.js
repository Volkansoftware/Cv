import './App.css';
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Users from './components/Users/Users'
import Home from './components/Home/Home'
import Register from './components/Register/Register'
import React from "react";

import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
function App() {
  return (
   
<Router>
  <Navbar/>
      <Switch>
        <Route path="/about" component={About}>
          <About />
        </Route>
        <Route path="/users"component={Users} >
          <Users />
        </Route>
        <Route path="/register" component={Register} >
          <Register />
          </Route>
        <Route path="/" component={Home} >
          
        </Route>
       
      </Switch>
    
  </Router>
);
}


  


export default App;
