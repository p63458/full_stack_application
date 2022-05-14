
import React from 'react'
import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.css';
 class Register extends React.Component
{
      constructor(props)
      {
        super(props)
        this.state=
        {
           username:"", 
           email: "" ,
           password: "",
           phonenumber:""
        }

      }
      handleUserNameChange=(event)=>{
                                      this.setState({
                                          username :event.target.value
                                      })
                                      console.log(this.state);
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
      handlePhoneNumberChange=(event)=>{
                                          this.setState({
                                              phonenumber :event.target.value
                                          })
                                          console.log(this.state);
      }
      handleSubmit=(event)=>{
              alert("handleSubmit");
              event.preventDefault();
              var data={ 
                       username:this.state.username, 
                       email:this.state.email ,
                       password:this.state.password,
                       phonenumber:this.state.phonenumber
                      }
                      console.log(data);
              axios.post('http://localhost:8000/register-data',data)
             .then(response =>{
                         console.log("response====="+response);
              })
             .catch(error =>{
               console.log("error");
             })
      }
      navigateToLogin()
      {
        window.location.href="/login";
      }

     render()
     {
        return(
          <form  class="m-3" onSubmit={this.handleSubmit}>
           <div class="form-group col-md-6">
             <label for="UserName">UserName</label>
             <input type="text" class="form-control" id="UserName" value={this.state.username} onChange={this.handleUserNameChange} required="true" placeholder="Enter UserName"/>
           </div>

            <div class="form-group col-md-6">
               <label >Email address</label>
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
            
            <div class="form-group col-md-6">
             <label for="phoneNumber">Phone Number</label>
             <input type="text" class="form-control" id="phoneNumber"  value={this.state.phonenumber}
           onChange={this.handlePhoneNumberChange}  placeholder="Enter Phone Number" required="true"/>
            </div>

            <div class="form-group form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
              <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
             
            <button type="submit" class="btn btn-primary mx-2">Submit</button>
             <button type="button" class="btn btn-success"
               onClick={(e) => {
                                this.navigateToLogin();
                               }}>Login</button>
          </form>
        )
         
    }
}
export default Register;


