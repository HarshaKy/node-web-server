const express = require('express');

var app = express();

app.get('/', (req, res) => {
  // res.send('<h1>Hello There!</h1>');
  res.send({
    text: 'Hello There!',
    name: 'Harsha',
    likes: [
      'Playing games',
      'Football'
    ]
  });
});

app.get('/about', (req, res) => {
  res.send('<h1>About Page</h1> <br> <p> The about section for the app. </p>');
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to send response'
  });
});

app.listen(3000);
