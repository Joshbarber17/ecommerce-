var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product = require('./products')
var productsSchema = product.schema

var orderSchema = new Schema ({
  user: {type: Schema.Types.ObjectId, ref: 'user', required: true},
  products: [{
    item: productsSchema,
    quantity: {type: Number, required: true, min: 1}
  }]
  ordered: {type: Dat, default: new Date()}
})

module.exports = mongoose.model('order', orderSchema)
