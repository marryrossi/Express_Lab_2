const express = require("express");

const app = express();

// defining routes
app.get("/greeting", function(req, res) {
    res.send("Hello, stranger")
});

// telling app to listen on port
app.listen(3000, function(){ 
    console.log("Express is listening for requests from the browser")
});