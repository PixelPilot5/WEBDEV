const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema({
    name: String,
    price:Number,
    category:String,
    instock:Boolean
    
    
});

module.exports = mongoose.model('product', productSchema);