import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Link,Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import Login from './login';
import Register from './register';
import DataDisplay from './DataDisplay';
import Home from './home';
class Routing extends React.Component 
{
   render() 
   {
        return (
     
                  <Router >
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/DataDisplay" component={DataDisplay}/>
                  </Router>
               )
   }
}
export default Routing;

