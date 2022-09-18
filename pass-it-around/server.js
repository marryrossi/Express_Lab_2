// Dependencies
const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send(`99 Bottles of beer on the wall! <a href="/98">Take one down, pass it around!</a>`)
});

app.get("/:number_of_bottles", (req, res) => {
    let number_of_bottles = req.params.number_of_bottles;
    if (number_of_bottles > 0) {
      res.send(`${number_of_bottles} bottles of beer on the wall! <a href="/${number_of_bottles - 1}">Take one down, pass it around</a>`)
    } else {
         res.send(`You're all out! <a href="/">Start again!</a>`) 
    };
  });

// Telling app to listen on port
app.listen(3000, function(){ 
    console.log("Express is listening stfor requests from the browser")
});
