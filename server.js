
//


// const app = express();

// // parse requests of content-type: application/json


// parse requests of content-type: application/x-www-form-urlencoded


// // simple route


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.get("/", (req, res) => {
    res.send({ message: recordset });
});


require("./app/routers/customer.routes")(app);
app.listen(4000, function () {
    console.log('Server is running..');
});


