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
mongoose.connect('mongodb://saravana7:Saravana7#@ds163595.mlab.com:63595/kit');
let UserSchema = new mongoose.Schema({
    first_name: { type: String, require: true },
    last_name: { type: String, require: true },
    email: { type: String, require: true },
    editable: { type: Boolean, require: true }
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User");


// Routes
// Get Users
app.get("/users", (req, res, next) => {
    console.log("Server > GET '/users' ");
    User.find({}, (err, users)=>{
        return res.json(users);
    })
})
module.exports = app;