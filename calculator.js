const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

const port = 3000;

//Code for Normal Calculator

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html"); //__dirname gives the file path of the current file no matter where it is hosted
});

app.post("/", function (req, res) {

    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let result = num1 + num2;
    res.send("The result is "+ result);
    
});

app.listen(port, function () {
    console.log("Server is running on port 3000");
});

//Code for BMI Calculator

app.get("/bmicalculator", function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {

    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let BMI = Math.round((weight / (height * height))).toFixed(2);
    res.send("Your BMI is " + BMI);

});
