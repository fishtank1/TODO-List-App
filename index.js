// Express setup
const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

// Initializing DB
const db = require('./config/mongoose');
const Task = require('./models/task');

const app = express();

// Middlewares
// Including assets/static folders
app.use(express.static('./assets'));

// Body parser
app.use(bodyParser.urlencoded({extended: false}));

// Entry to routes 
app.use('/', require('./routes'));

// Defining views
app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(port, (err) => {
    if(err) {
        console.log(`Error occured starting server: ${err}`);
        return;
    } 
    console.log(`Server is up and running on port: ${port}`);
});