const mongoose = require('mongoose');
const { Schema } = mongoose;
// destructuring ^ const Schema = mongoose.Schema;

const itemSchema = new Schema({
  title: { type: String, required: true },
  synonpsis: { type: String, required: true },
  imageURL: { type: String, required: true },
  episodes: { type: Object, required: true },
});


const User = mongoose.model('items', itemSchema);
 
module.export = Item;
