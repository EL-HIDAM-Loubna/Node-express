const express = require('express');
const http = require('http');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

// Express Setup
const app =express();

// Logger
app.use(morgan('dev'));

// Body Parser
app.use(bodyParser.json());

// Static Files
app.use(express.static(__dirname+'/public'));

// Routes
app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', leaderRouter);
app.use((req, res, next)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    res.end('<html><body><h1> This is an Express Server </h1></body></html>');
});

// Server Setup
const hostname ='localhost';
const port = 3000;
const server = http.createServer(app);
server.listen(port,hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}`);
})