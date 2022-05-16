
import React from 'react'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css';
class Register extends React.Component {
  constructor(props) {
    super(props)
    this.state =
    {
      /*  username:"", 
       email: "" ,
       password: "",
       phonenumber:"" */
      roll_no: "",
      name: "",
      password: "",
      father_name: "",
      date_of_birth: "",
      class: "",
      section: ""
    }

  }
  handle_roll_no_Change = (event) => {
    this.setState({
      roll_no: event.target.value
    })
    console.log(this.state);
  }
  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state);
  }
  handlePasswordChange = (event) => {
    this.setState({
      password: event.target.value
    })
    console.log(this.state);
  }
  handle_father_name_Change = (event) => {
    this.setState({
      father_name: event.target.value
    })
    console.log(this.state);
  }
  handle_date_of_birth_Change = (event) => {
    this.setState({
      date_of_birth: event.target.value
    })
    console.log(this.state);
  }
  handle_class_Change = (event) => {
    this.setState({
      class: event.target.value
    })
    console.log(this.state);
  }
  handle_section_Change = (event) => {
    this.setState({
      section: event.target.value
    })
    console.log(this.state);
  }
  handleSubmit = (event) => {
    alert("handleSubmit");
    event.preventDefault();
    var data = {
     /*  username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      phonenumber: this.state.phonenumber */
      roll_no: this.state.roll_no,
      name: this.state.name,
      password: this.state.password,
      father_name: this.state.father_name,
      date_of_birth: this.state.date_of_birth,
      class: this.state.class,
      section: this.state.section
    }
    console.log(data);
    axios.post('http://localhost:8000/register-data', data)
      .then(response => {
        console.log("response=====" + response);
      })
      .catch(error => {
        console.log("error");
      })
  }
  navigateToLogin() {
    window.location.href = "/login";
  }

  render() {
    return (
      <form class="m-3" onSubmit={this.handleSubmit}>
        <div class="form-group col-md-6">
          <label for="roll_no">Roll Number</label>
          <input type="text" class="form-control" id="roll_no" value={this.state.roll_no} onChange={this.handle_roll_no_Change} required="true" placeholder="Enter Roll Number" />
        </div>

        <div class="form-group col-md-6">
          <label >Name</label>
          <input type="name" class="form-control" id="name"
            value={this.state.name} onChange={this.handleNameChange}
             placeholder="Enter name" required="true" />
        </div>

        <div class="form-group col-md-6">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1"
            value={this.state.password} onChange={this.handlePasswordChange}
            placeholder="Password" required="true" />
        </div>

        <div class="form-group col-md-6">
          <label for="father_name">Father Name</label>
          <input type="text" class="form-control" id="father_name" value={this.state.father_name}
            onChange={this.handle_father_name_Change} placeholder="Enter Father Name" required="true" />
        </div>
        <div class="form-group col-md-6">
          <label for="date_of_birth">Date of Birth</label>
          <input type="text" class="form-control" id="date_of_birth" value={this.state.date_of_birth}
            onChange={this.handle_date_of_birth_Change} placeholder="Enter Date Of Birth" required="true" />
        </div>
        <div class="form-group col-md-6">
          <label for="class">Class</label>
          <input type="text" class="form-control" id="class" value={this.state.class}
            onChange={this.handle_class_Change} placeholder="Enter Class" required="true" />
        </div>
        <div class="form-group col-md-6">
          <label for="section">Section</label>
          <input type="text" class="form-control" id="class" value={this.state.section}
            onChange={this.handle_section_Change} placeholder="Enter Section" required="true" />
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


