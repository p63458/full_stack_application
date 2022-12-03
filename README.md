# full_stack_application
Front end react js and backend node js
To run the node application user > node index.js
--------------------------------------------------------------------------------------
                                         Web Application Planning:
-----------------------------------------------------------------------------------------
                  School Portal design
-------------------------------------------------------------------------------------
1) Registration Page
2)Login Page
-----------------------------------------------------------------
Registration Page:
Backend data
------------
Table name : register
columns/Fields: roll no - number
name - string
password - string
father name- string
date of birth- date
class - number
section- string
post ,get, delete ,put
create the audit logs for this so that the admin can see the logs.
Frontend data
-------------
create a registration page and send the data to backend in json format
------------------------------------------------------------------------------
CREATE TABLE register (
roll_no integer,
name varchar(20),
password  varchar(20),
father_name varchar(20),
date_of_birth date,
class integer,
section varchar(20)
);

ALTER TABLE register
ALTER COLUMN father_name TYPE varchar(20)

select * from registers;


https://nodejs.org/en/download/
https://www.postman.com/downloads/
https://code.visualstudio.com/docs/?dv=win64user
https://git-scm.com/download/win
https://www.postgresql.org/ftp/pgadmin/pgadmin4/v6.10/windows/


   
