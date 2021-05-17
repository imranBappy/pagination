import React from 'react';
import {
  BrowserRouter as Router,

  Route,
  Switch
} from "react-router-dom";
import './App.css';
import Todo from './Todo';
import User from './User';


function App() {
 

  return (
    <>
    <Router>
      <Switch>
        <Route exact path='/'>
          <Todo></Todo>
        </Route>
        <Route path='/user'>
          <User></User>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
