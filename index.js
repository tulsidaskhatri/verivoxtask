const express = require('express');
const morgan = require('morgan');
const debug = require('debug').debug('startup');
const winston = require('winston');
const app = express();
app.use(express.json());

winston.add(new winston.transports.File({filename: app.get('env')+'.log'}));

process.on("uncaughtException", (err)=>{
    winston.error(err.message);
});



if(app.get('env') === 'development') {
    app.use(morgan('tiny'));
}


const consumption = require('./routes/consumption');

app.use('/', consumption);

const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
    debug(`Listening to port ${port}`);
});

module.exports = server;