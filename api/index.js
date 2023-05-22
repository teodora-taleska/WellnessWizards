// creating the express application
import express from "express";
import mysql from "mysql"

const app = express()

// DB_HOST=localhost
// DB_USER=studenti
// DB_PASS=12345678
// DB_DATABASE=Qcodeigniter

const db = mysql.createConnection({
    // configuration
    host: "localhost",
    user:"codeigniter",
    password:"codeigniter2019",
    database: "Group10_MIT"
}) 

// If there is an auth problem 
// ALTER USER 'codeigniter'@'localhost' IDENTIFIED WITH mysql_native_password BY "codeigniter2019"

// app.post("/", (req, res) => {
//     const q = "ALTER USER 'codeigniter'@'localhost' IDENTIFIED WITH mysql_native_password BY 'codeigniter2019'"
//     db.query(q, (err) => {
//         if(err) return res.json(err)
//     })
// })

app.get("/user", (req, res)=>{
    const q = "SELECT * FROM user"
    db.query(q, (err, data) => {
        if(err) return res.json(err)
        return res.json(data)
    })
})

app.listen(5000, () => {
    console.log("Connected!")
})