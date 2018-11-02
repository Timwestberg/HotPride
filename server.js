
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Hot Restaurant Reservation (DATA)
var reservations =[
    {
        name:"Tony",
        phoneNumber:"555-356-8484",
        email:"testing@email.com",
        uniqueId: "01010"
    },
    {
        name:"Sharon",
        phoneNumber:"555-346-8444",
        email:"testing1@email.com",
        uniqueId: "39383"
    },
    {
        name:"Tim",
        phoneNumber:"555-743-8980",
        email:"testing3@email.com",
        uniqueId: "77773"
    },
    {
        name:"Paul",
        phoneNumber:"555-884-4884",
        email:"testing2@email.com",
        uniqueId: "85573"
    },
    {
        name:"Tony",
        phoneNumber:"555-356-8484",
        email:"testing4@email.com",
        uniqueId: "84848"
    }, 
]

var waitlist = [
    {
        name:"Tiny",
        phoneNumber:"555-356-8484",
        email:"testing@email.com",
        uniqueId: "01010"
    },
    {
        name:"Stormy",
        phoneNumber:"555-346-8444",
        email:"testing1@email.com",
        uniqueId: "39383"
    },
    {
        name:"Tommy",
        phoneNumber:"555-743-8980",
        email:"testing3@email.com",
        uniqueId: "77773"
    },
    {
        name:"Paulie",
        phoneNumber:"555-884-4884",
        email:"testing2@email.com",
        uniqueId: "85573"
    },
]

// Routes
//=================================================================================
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, "home.html"));
})
 
app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
  });

  app.get("/make", function(req, res) {
    res.sendFile(path.join(__dirname, "make.html"));
  });

  app.get("/api/view", function(req, res) {
    return res.json(waitlist);
  });
  
  app.get("/api/make", function(req, res) {
    return res.json(reservations);
  });
  

//Create New Reservations

app.post("/api/reservations", function(req, res){
    var newreservations = req.body;
    console.log(newreservations);
    reservations.push(newreservations);
    res.json(newreservations);
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });