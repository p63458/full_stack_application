
import React from 'react'
import axios from 'axios'
 import 'bootstrap/dist/css/bootstrap.css';
 class DataDisplay extends React.Component
{
 constructor(props){
     super(props)
     this.state={
       data:[]

     }
 }
componentDidMount(){
  axios.get('http://localhost:8000/get-login-table')
   .then(response =>{
           console.log(response);
           console.log("got the data");
           this.setState({data:response.data})
   })
   .catch(error =>{
     console.log("error");
   })
 }

 render()
 {
  var {data}=this.state
    return(
    
    <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">EMAIL</th>
      <th scope="col">PASSWORD</th>
      <th scope="col">BUTTON</th>
    </tr>
  </thead>
  <tbody>
    {
    data.length ?
  data.map(post => 
     <tr key={post.id}>
      <td>{post.email}</td>
       <td>{post.password}</td>
       <td> <div class="glyphicon glyphicon-pencil"></div></td>
    </tr> ):null

}
   </tbody>
</table>

    )
     
}

}
export default DataDisplay;


