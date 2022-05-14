
import React from 'react'
import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.css';
 class Home extends React.Component
{
 constructor(props){
     super(props)
     this.state={
       

     }
 }
 navigateToLogin()
 {
 window.location.href = "/login";
 }
 navigateToRegister()
 {
   window.location.href = "/register";
 }
 
 
 render()
 {
    return(
    <div class="m-3">HOME PAGE
    <br></br><button type="button" class="btn btn-primary mx-2"
         onClick={(e) => {
                          this.navigateToLogin();
                         }}>Login</button>
    <button type="button" class="btn btn-success"
         onClick={(e) => {
                          this.navigateToRegister();
                         }}>Register</button>

</div>
  )
     
}
}
export default Home;


