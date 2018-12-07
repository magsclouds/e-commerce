const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    productName: String,
    artistName: String,
    price: String,
    productInfo: String,
    image: String,
    image_public_id: String
})

module.exports = mongoose.model('products', ProductSchema);
