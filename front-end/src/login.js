
import React from 'react'
import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.css';
 class Login extends React.Component
{
 constructor(props){
     super(props)
     this.state={
        email:"",
        password:""

     }
 }
 handleEmailChange=(event)=>{
    this.setState({
        email :event.target.value
    })
    console.log(this.state);
 }
 handlePasswordChange=(event)=>{
    this.setState({
        password :event.target.value
    })
    console.log(this.state);
 }
 handleSubmit=(event)=>{
 // alert("handleSubmit");
  // alert(`${this.state.email} ${this.state.password}`)
   var email1=this.state.email;
   console.log(email1);
   event.preventDefault();
   var data={ 
        email: this.state.email,
        password: this.state.password
        
    }
    console.log("data====",data);
   axios.post('http://localhost:8000/login-data',data)
   .then(response =>{
           console.log("response====="+response);
          alert("data is submitted successfull");
   })
   .catch(error =>{
     console.log("error");
     alert("OOPS something went wrong");
   })
 }
 // componentDidMount(){
 //  axios.get('http://localhost:3000/get-login-table')
 //   .then(response =>{
 //           console.log(response);
 //            //this.setState({detials:response.data})
 //           console.log("got the data");
 //   })
 //   .catch(error =>{
 //     console.log("error");
 //   })

 // }
 navigateToRegister()
 {
   console.log("i am inside navigate to register");
   window.location.href = "/register";
 }
navigateToDataDisplay()
{
  window.location.href = "/DataDisplay";
}

 
 render()
 {
    return(
     // var {detials}=this.state;
       
<form  class="m-3" onSubmit={this.handleSubmit}>

  <div class="form-group col-md-6">

    <label for="exampleInputEmail1">Email address</label>
    
    <input  type="email" class="form-control" id="exampleInputEmail1"
    value={this.state.email} onChange={this.handleEmailChange}
     aria-describedby="emailHelp" placeholder="Enter email" required="true"/>
    
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    
  </div>

  <div class="form-group col-md-6">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" 
value={this.state.password} onChange={this.handlePasswordChange}
    placeholder="Password" required="true"/>
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary mx-2"
   onClick={(e) => {
                    this.navigateToDataDisplay();
                   }}>Submit</button>
  <button type="button" class="btn btn-success"
   onClick={(e) => {
                    this.navigateToRegister();
                   }}>Register</button>
  <div class="alert alert-success my-3 "  >
    <strong>Success!</strong> This alert box could indicate a successful or positive action.
  </div>


</form>



    )
     
}}
export default Login;


