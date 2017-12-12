// Express
let express = require("express");
const app = express.Router();
const path = require("path");

// Morgan
let morgan = require("morgan");
app.use(morgan('dev')); 

// Connect
// Mongo Database
let mongoose = require("mongoose");
mongoose.connect('mongodb://Dhameem:dhameems13@ds135966.mlab.com:35966/skyway');
let UserSchema = new mongoose.Schema({
    Name: { type: String, require: true },
    User_name: { type: String, require: true },
    Password: { type: String, require: true },
    Phone_no: { type: String, require: true },
    User_role:{ type: Number}
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");


// Routes
// Get Users
app.get("/employee", (req, res, next) => {
    console.log("Server > GET '/users' ");
    User.find({}, (err, users)=>{
        return res.json(users);
    })
})

app.post("/employee/create", (req, res, next) => {
    console.log("req",req);
    console.log("res",res);
    console.log("next",next);
    var data={Name:req.body.Name,User_name:req.body.User_name,Password:req.body.Password,Phone_no:req.body.Phone_no};
    User.create(data, (err, user)=>{
        if (err) return res.json(err)
        else return res.json(user)
    })
})
module.exports = app;