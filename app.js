const { json } = require("express");
const express = require("express");
const https = require("https")

const app = express();
const url = "https://api.openweathermap.org/data/2.5/weather?q=Los%20Angeles&appid=78725024d21a0b6bc843b74ea8e5da79&units=imperial"

app.get("/", function(req, res){
    https.get(url, function(response){
        console.log(response.statusCode)
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const temp = weatherData.main.temp
            const description = weatherData.weather[0].description
        })
    })
})

app.listen(3000, function(){
    console.log("Server is running on port 3000")
})