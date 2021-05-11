// import './App.css';
import {BrowserRouter as Router, Swith, Route,Link} from "react-router-dom";
import { Fragment } from 'react';
import Login from './Componets/Login';
import Dashboard from './Componets/Dashboard';


function App() {
  return (
    <div className="App">
      <Router>
    <div>
      <Fragment>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard" component={Dashboard} />
       </Fragment>
       </div>
  </Router>
    </div>
  );
}

export default App;
