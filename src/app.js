const express = require("express");
const app = express();
const port = 3000;

// starting the server
app.listen(port, () => {
    console.log('Server is successfully listem=ning on port 3000')
});


// Define a basic route for the homepage
app.use('/test', (req, res) => {
    res.send('Hello World from Express!');
  });
  app.use('/', (req, res) => {
    res.send('Hello World from Express Dashboard!');
  });

