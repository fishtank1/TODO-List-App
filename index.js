const express = require('express');
const port = 8000;
const app = express();

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