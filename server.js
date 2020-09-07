const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers', (req, res) => {
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
});

app.listen(port, () => console.log(`Listening on port ${port}`));