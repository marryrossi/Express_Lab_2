// Dependencies
const express = require("express");
const app = express();

// Routes
app.get("/", (req, res) => {
    res.send("Welcome!")
});

// Greeting
app.get("/greeting/:name", (req, res) => {
    res.send(`Hello, ${req.params.name}! It's so great to see you!` )
});

// Tip Percentage
app.get("/tip/:total/:tipPercentage", (req, res) => {
    res.send(`The tip amount is $${(req.params.tipPercentage / 100) * req.params.total}.`)
});

// Magic 8 Ball
const eightBall = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", 
"You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes",
 "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", 
"Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", 
"Outlook not so good", "Very doubtful"]; 

const random = eightBall[Math.floor(Math.random() * eightBall.length)] 

app.get("/magic/:question", (req, res) => {
    res.send(`<h1>Question: ${req.params.question} <br> Answer: ${random}</h1>`)
});

// telling app to listen on port
app.listen(3000, function(){ 
    console.log("Express is listening for requests from the browser")
});

 


