// Dependencies
const express = require("express");
const app = express();

// Routes
app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}! It's so great to see you!` )
});

app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`The tip amount is $${(req.params.tipPercentage / 100) * req.params.total}.`)
});

// telling app to listen on port
app.listen(3000, function(){ 
    console.log("Express is listening for requests from the browser")
});