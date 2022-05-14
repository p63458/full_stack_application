const express = require('express');
const Sequelize = require('sequelize');  //Using Sequelize ORM for Database operations
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
var cors = require('cors')
app.use(cors())
//--------------------------------------------------------------------------------------------
const port = 8000;

//------------------------------------------------------------------------------------------------

app.get('/', (req, res) => res.send('School App'));
//----------------------------------------------------------------------------------------------

app.listen(port, () => console.log(`School-app listening on port ${port}!`));

//------------------------------------------------------------------------------------------
const sequelize = new Sequelize({
      dialect: 'postgres',
});
const sequelizeroute = new Sequelize('postgres://postgres:1234@localhost:5432/School_App');
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

/*   const login = sequelizeroute.define('login', 
   { 
   	email: Sequelize.STRING, 
   	password: Sequelize.STRING 
   });
  login.sync(); */  //Creation of table using sequelize ORMs

//CREATION OF TABLE
        /*
        TABLE 1 :   CREATE TABLE register (
                    roll_no integer,
                    name varchar(20),
                    password  varchar(20),
                    father_name varchar(20),
                    date_of_birth date,
                    class integer,
                    section varchar(20)
                    );
         */
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
 //register table creation
  const register = sequelizeroute.define('register', 
    { 
      roll_no : Sequelize.INTEGER,
      name: Sequelize.STRING,
      password: Sequelize.STRING,
      father_name: Sequelize.STRING,
      date_of_birth : Sequelize.DATE,
      class : Sequelize.INTEGER,
      section : Sequelize.STRING
    });
   register.sync();
//----------------------------------------------------------------------------------------
//inserting data into the register table
  app.post('/register-data',(req, res)=> {
    console.log("coming in route");
      var name = req.body.name + ' ' + req.body.password;
      console.log(name+"submited successfully");
      //inserting the data insert query
      register.create({
            roll_no : req.body.roll_no , 
            name : req.body.name ,
            password : req.body.password,
            father_name : req.body.father_name,
            date_of_birth : req.body.date_of_birth,
            class : req.body.class,
            section : req.body.section
    })
    .then(data => 
      {
          console.log(" registered  successfully");
          res.json(data)
      })
      .catch(err =>res.json(err) );
  });
  //