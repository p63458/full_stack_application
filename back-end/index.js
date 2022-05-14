const express = require('express');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

var cors = require('cors')

app.use(cors())

const port = 8000;

//------------------------------------------------------------------------------------------------

app.get('/', (req, res) => res.send('Notes App'));
//----------------------------------------------------------------------------------------------

app.listen(port, () => console.log(`notes-app listening on port ${port}!`));

//------------------------------------------------------------------------------------------
const sequelize = new Sequelize({
      dialect: 'postgres',
});
const sequelizeroute = new Sequelize('postgres://postgres:jira123@localhost:5432/fullstackapplication');
//-------------------------------------------------------------------------------------------
sequelizeroute
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });
//---------------------------------------------------------------------------------------------

  const login = sequelizeroute.define('login', 
   { 
   	email: Sequelize.STRING, 
   	password: Sequelize.STRING 
   });
  login.sync();
  //--------------------------------------------------------------------------------------
 app.post('/login-data',(req, res)=> {
  	console.log("coming in route");
      var name = req.body.email + ' ' + req.body.password;
      console.log(name+"submited successfully");
      //inserting the data insert query
      login.create({
        email:req.body.email,
        password:req.body.password
    })
    .then(data => 
      {
          console.log("Submit successfully");
          res.json(data)
        })
      .catch(err =>res.json(err) );
  });
 //-------------------------------------------------------------------------------------
 app.get("/get-login-table",function(req, res)
    {
           login.findAll()
            .then(data=>
            {
                var x=new Array(data.length);
                for (i =0 ; i <data.length; i++)
                {
                    x[i]=data[i].dataValues;
                }
                res.json(x); 
            })
            .catch(err => res.json(err));
    });
 //------------------------------------------------------------------------------------------
  const register = sequelizeroute.define('register', 
    { 
     username: Sequelize.STRING, 
     email: Sequelize.STRING ,
     password: Sequelize.STRING,
     phonenumber:Sequelize.STRING
    });
   register.sync();
//----------------------------------------------------------------------------------------
  app.post('/register-data',(req, res)=> {
    console.log("coming in route");
      var name = req.body.email + ' ' + req.body.password;
      console.log(name+"submited successfully");
      //inserting the data insert query
      register.create({
       username: req.body.username, 
       email: req.body.email ,
       password: req.body.password,
       phonenumber:req.body.phonenumber
    })
    .then(data => 
      {
          console.log(" registered  successfully");
          res.json(data)
        })
      .catch(err =>res.json(err) );
  });