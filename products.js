var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var productsSchema = new Schema ({
  title: {
    type: String,
    unique: true,
    required: true,
    index: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = {
  model: mongoose.model('products', productsSchema),
  schema: productsSchema
};
