
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const compression = require('compression');
const appPort = '80'

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, X-Forwarded-For, content-type, ');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.use((req, res, next) => {
    console.log(`${req.method} ${req.originalUrl} [STARTED]`); //eslint-disable-line no-console
    if (req.method == 'POST') req.body.record.startTime = process.hrtime();
    next()
})
app.use(compression());

/** Socket Server initiate*/

const {db} = require('./src/database');

require('./src/libs/SocketServer/socket')(db);
const routes = require('./src/router')(express, db);

/** Api image processing */

app.use('/imageprocess', routes.imageProcess);
app.use('/dashboard', routes.dashboard);

app.listen(appPort, () => console.log(`app listening at http://localhost:${appPort}`)) //eslint-disable-line no-console


module.exports = app;
