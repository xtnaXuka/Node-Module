const mysql = require("mysql2");
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));

const connection = mysql.createConnection({
  host: "localhost", 
  user: "root",
  password: "hatnaa11",
  database: "employees",
  multipleStatements: true,
});

connection.connect((err)=>{
    if(!err) console.log('Databse connected successfully');
    else console.log("Database connection failed" + JSON.stringify(err, undefined, 2 ));
})


  
  // with placeholder
//   connection.query(
//     'SELECT * FROM employees WHERE last_name',
//     ['Page', 45],
//     function(err, results) {
//       console.log(results);
//     }
//   );
// app.set("view options", { layout: true });
// connection.execute(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Rick C-137', 53],
//     function(err, results, fields) {
//       console.log(results); // results contains rows returned by server
//       console.log(fields); // fields contains extra meta data about results, if available
  
//       // If you execute same statement again, it will be picked from a LRU cache
//       // which will save query preparation time and give better performance
//     }
//   );
// app.get(
//   "/",
//   (req, res, next) => {
//     connection.query(
//       'SELECT * FROM employees limit 10',
//       function(err, results, fields) {
//         // console.log(results); 
  
//         res.send(results);
//       }
//     );
//   }
// );

app.get('/employees/:id', (req,res)=>{
  connection.query('select * from employees where emp_no = ?', req.params.id,(err, rows, fields)=>{
    if(!err){
      res.send(rows)
    }else console.log(err);
  })
});

app.post('/employees', (req,res)=>{
  const employee  = req.body;
  // console.log(employee);



  connection.query(`insert into employees(emp_no, birth_date, first_name, last_name, gender, hire_date) values((select MAX(emp_no) +1 from employees e), "${employee.birth_date}", "${employee.first_name}", "${employee.last_name}", "${employee.gender}", "${employee.hire_date}")`, (err, results, fields)=>{
    if (!err) {
      console.log('aa'); 
    }
    // console.log(err);
  });
  connection.query("select max(emp_no) from employees;", (err, results, fields)=>{
    // console.log(...results);
    res.send(results)
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http:localhost:${port}`);
});
