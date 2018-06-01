const express = require('express')
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('morgan');
//const db = require('../database')
const app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname + '/../public/dist'));

// app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, './client/dist')));
app.use(bodyParser.urlencoded({ extended: false }));

// router.get('/', (req, res) => {

// })

const port = 1128;



app.listen(port, () => {
    console.log('listen on port: ', port)
})