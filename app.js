
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const path = require("path");

const app = express()

const port= process.env.PORT || 3000;


app.use(bodyParser.json())
//app.use(express.static('public'))

app.use(express.static(path.join(__dirname, "/public")))

app.use(bodyParser.urlencoded({
    extended:true
}))


mongoose.connect('mongodb+srv://Thierno:ZXDianibrahim42@pucherpoll.gxaqz.mongodb.net/nenefuta3',{useNewUrlParser: true}, {useUnifiedTopology: true});

var db=mongoose.connection;


db.on('error',() =>console.log("Error in connecting to the database"));
db.once('open',() => console.log("Connected to database"))



app.post("/sign_up",(req,res)=> {

    var email=req.body.email;
    var state=req.body.state;
    var zipcode=req.body.zipcode;
    var product=req.body.product;
    var price=req.body.price;
    var userprice=req.body.userprice;



    var data= {
        "email": email,
        "state":state,
        "zipcode":zipcode,
        "product":product,
        "price":price,
        "userprice":userprice


     }

     db.collection('users').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("success.html")

})



app.post("/sign_up_elec",(req,res)=> {

    var email=req.body.email;
    var state=req.body.state;
    var zipcode=req.body.zipcode;
    var product=req.body.product;
    var price=req.body.price;
    var userprice=req.body.userprice;


    var data= {
   
        "email": email,
        "state":state,
        "zipcode":zipcode,
        "product":product,
        "price":price,
        "userprice":userprice


     }

     db.collection('users_elec').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("success.html")

})







app.post("/sign_up_natGas",(req,res)=> {

    var email=req.body.email;
    var state=req.body.state;
    var zipcode=req.body.zipcode;
    var product=req.body.product;
    var price=req.body.price;
    var userprice=req.body.userprice;

    var data= {
     
        "email": email,
        "state":state,
        "zipcode":zipcode,
        "product":product,
        "price":price,
        "userprice":userprice


     }

     db.collection('users_natGas').insertOne(data, (err,collection) => {
        if(err){
            throw err;
        }
        console.log("Reccord inserted successefully ");

     })

     return res.redirect("success.html")

})

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