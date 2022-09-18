// Dependencies
const express = require("express");
const app = express();

// Routes
app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}! It's so great to see you!` )
});

// telling app to listen on port
app.listen(3000, function(){ 
    console.log("Express is listening for requests from the browser")
});