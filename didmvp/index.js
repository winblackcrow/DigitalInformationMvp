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

const multer = require('multer');
const upload = multer({dest : './upload'})

app.get('/api/customers', function (req, res)  {

    res.header("Access-Control-Allow-Origin", "*"); //package.json의 Proxy 설정을 했으나, cors 문제가 발생해 heder에 처리함.

    console.log("request ---------->")

    connection.query(
        "SELECT * FROM customer",(error, rows) => 
        {
            if (error) throw error;
            //console.log(rows);
            res.send(rows);
        }
    );    
});

app.use('/image', express.static('./upload')); //사용자한테 image 폴더로 보여지고, 실제는 ./upload 폴더에 저장된다.

app.post('/api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO customer VALUES(null, ?,?,?,?,?)';    

    let image = '/image/' + req.file.filename; //mutler에서 filename을 자동으로 만들어 준다???
    let userName = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, userName, birthday, gender, job];
    connection.query(sql, params, 
        (err, rows, fields) => {
            if (err) throw err;            
            res.send(rows);
        }
        )

});

app.listen(port, () => {console.log(`Listen on port ${port}`)});