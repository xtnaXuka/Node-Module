const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;
app.use(express.json());
app.use(express.static("public"));



var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hatnaa11',
    database: 'employees',
    multipleStatements: true
})

connection.connect(err=>console.log( !err  ? "Database connected suceessfully." : err) )


app.get('/company', (req, res)=>{
    const title = req.query;
    connection.query(`select count(*) as positionNumbers from employees where emp_no in (select emp_no from titles where title="${title.title}");`, (err, results, fields)=>{
        console.log(...results);
        res.send(results)
    })
    // res.send(title.title)
})
app.get('/employees', (req, res)=>{
    const title = req.query;
    connection.query(`select sum(salary) from dept_emp a inner join salaries b on a.emp_no = b.emp_no  inner join departments c where  c.dept_name = "${title.debt}";
    `, (err, results, fields)=>{
        console.log(title);
        res.send(results)
    })
    // res.send(title.title)
})
app.get('/managers/salary', (req, res)=>{
    const title = req.query;
    connection.query(`select * from salaries s inner join dept_manager d on s.emp_no = d.emp_no;`, (err, results, fields)=>{
        console.log(title);
        res.send(results)
    })
})

app.listen(port, () => console.log(`app is started on ${port} port`));
