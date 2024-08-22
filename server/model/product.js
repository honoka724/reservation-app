const mongoose = require('mongoose')
const Schema = mongoose.Schema;
//const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    //author: ObjectId,
    coverimage: String,
    name: { type: String, required: true, max:[60, '最大60文字までです'] },
    price: Number,
    description: String,
    heading1: String,
    heading2: String,
    heading3: String,
    headtxt1: String,
    headtxt2: String,
    headtxt3: String
});

module.exports = mongoose.model('Product', ProductSchema)
