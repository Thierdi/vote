var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const path = require("path");

const app = express()

const port= process.env.PORT || 3000;

app.use(bodyParser.json())


app.use(express.static(path.join(__dirname, "/public")))

app.use(bodyParser.urlencoded({
    extended:true
}))

// Connecting to the database 

//(only for fiverr expert I hired) You can change the /thierno to /[Your name] on the link. That way, the data you send during your test 
//will be separated from mine in the data base

mongoose.connect('mongodb+srv://thierno-user-01:thierno-user-01@cluster0.9epwp.mongodb.net/thierno',{useNewUrlParser: true}, {useUnifiedTopology: true});

var db=mongoose.connection;

db.on('error',() =>console.log("Error in connecting to the database"));
db.once('open',() => console.log("Connected to database"))


// Get vote for p1 and send  data
app.post("/voteP1",(req,res)=> {

    var email=req.body.email;
    var state=req.body.state;
    var zipcode=req.body.zipcode;
    var price=req.body.price;
    var userprice=req.body.userprice;

    var data= {
        "email": email,
        "state":state,
        "zipcode":zipcode,
        "price":price,
        "userprice":userprice


     }

     db.collection('p1-data').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("success.html")

})

// Get vote for p2 and send data

app.post("/voteP2",(req,res)=> {

    var email=req.body.email;
    var state=req.body.state;
    var zipcode=req.body.zipcode;
    var price=req.body.price;
    var userprice=req.body.userprice;


    var data= {
   
        "email": email,
        "state":state,
        "zipcode":zipcode,
        "price":price,
        "userprice":userprice
     }

     db.collection('p2-data').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("success.html")

})

// Get vote for p3 and send data
app.post("/voteP3",(req,res)=> {

    var email=req.body.email;
    var state=req.body.state;
    var zipcode=req.body.zipcode;
    var price=req.body.price;
    var userprice=req.body.userprice;

    var data= {
     
        "email": email,
        "state":state,
        "zipcode":zipcode,
        "price":price,
        "userprice":userprice


     }

     db.collection('p3-data').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("success.html")

})

// Get meeting sign up data

app.post("/sign_up_annual_meating",(req,res)=> {

    var email=req.body.email;

    var data= {
     
        "email": email
     }

     db.collection('users_annual_meating').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("meet_sign_success.html")

})

app.get("/",( req, res)=>{

    res.set("Allow-access-Allow-Origin",'*')

    return res.redirect('index.html')

}).listen(port);

console.log("Listening to port 3000");