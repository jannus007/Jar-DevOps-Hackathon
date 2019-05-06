const express = require('express');
const request = require('request');
const app = express()
const apiKey = '0269b5995964786871e7279efb8d3f3e';

app.post('/', function (req, res) {
    let city = 'hyderabad';
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`
  request(url, function (err, response, body) {
      if(err){
        res.render('index', {weather: null, error: 'Error, please try again'});
      } else {
        let weather = JSON.parse(body)
        if(weather.main == undefined){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } else {
         return true;
        }
      }
    });
  })
