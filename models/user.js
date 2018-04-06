const mongoose = require('mongoose');
const { Schema } = mongoose;
// destructuring ^ const Schema = mongoose.Schema;

const userSchema = new Schema({
  googleId: String,
  title: String
});


const User = mongoose.model('users', userSchema);
 
module.export = User;
