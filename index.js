const http = require('http');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

const router = require('./router');

const app = express();

const port = process.env.PORT || 4000;

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'));
app.use(bodyParser.json({type: '*/*'}));

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

router(app);

const server = http.createServer(app);

server.listen(port);
console.log('#### -- SERVER RUNNING -- ####');
console.log('# Express:  Listening on port', port);
