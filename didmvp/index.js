const fs = require('fs');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection ({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
connection.connect();

app.get('/api/customers', function (req, res)  {

    res.header("Access-Control-Allow-Origin", "*"); //package.json의 Proxy 설정을 했으나, cors 문제가 발생해 heder에 처리함.

    console.log("request ---------->")

    connection.query(
        "SELECT * FROM customer",(error, rows) => 
        {
            if (error) throw error;
            console.log(rows);
            res.send(rows);
        }
    );

    
})

app.listen(port, () => {console.log(`Listen on port ${port}`)});