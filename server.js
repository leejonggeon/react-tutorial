const fs = require('fs');   
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
        host: conf.host,
        user: conf.user,
        password: conf.password,
        port: conf.port,
        database: conf.database
    });

connection.connect();

app.get('/api/customers', (req, res) => {


    
    connection.query(
        "select * from customer",
        (err, rows, fields) => {
            res.send(rows);
        }
    );
    
/*
    res.send([
        {
            'id': 1,
            'image': 'http://placeimg.com/64/64/1',
            'name': 'Mr.Hong',
            'birth': '961222',
            'gender': 'male',
            'job': 'student'
        },
        {
            'id': 2,
            'image': 'http://placeimg.com/64/64/2',
            'name': 'Mr.JJJ',
            'birth': '961122',
            'gender': 'male',
            'job': 'programmer'
        },
        {
            'id': 3,
            'image': 'http://placeimg.com/64/64/3',
            'name': 'ParkHyeWon',
            'birth': '941011',
            'gender': 'female',
            'job': 'Designer'
        }
    ]
    );
*/



});

app.listen(port, () => console.log(`Listening on port ${port}`));