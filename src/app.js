const express = require("express");
const app = express();
const port = 3000;

// starting the server
app.listen(port, () => {
    console.log('Server is successfully listem=ning on port 3000')
});


// Define a basic route for the homepage
// while testing in postman it works for get and post
app.use('/test', (req, res) => {
    res.send('Hello Test!');
});

//in postman works only for get
// app.get('/user', (req, res) => {
//   console.log(req.query);
//   res.send({firstName: "Lakshmi", lastName: "Shetty"})
// });

app.get('/user/:userId/:paswword', (req,res, next)=>{
  console.log(req.params);
  // res.send('Routing Handler 1')
  next();
  
}, (req, res, next) => {
  console.log("Routing Handler 2")
  // res.send("Routing Handler 2");
  next();
},(req, res, next) => {
  console.log("Routing Handler 3");
  // res.send("Routing Handler 3");
  next();
})
app.post('/user', (req, res) => {
  //logic to store a user in db
  res.send('New user data stored successfully')
});

  

