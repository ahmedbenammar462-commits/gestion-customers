const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    Email:String,
    Telephone: String,
    Age: String,
    Country: String,
    Gender:String

},{ timestamps: true }
);
 
 
// Create a model based on that schema
const User = mongoose.model("customer", UserSchema);
 
 
// export the model
module.exports = User;