var express = require('express');
var bodyParser= require('body-parser');
var cors = require('cors');
// var mongojs = require('mongojs'); replaced with mongoose
var mongoose = require('mongoose');
var app = express();
app.use(bodyParser.json());
var port = 2020;
app.use(express.static(__dirname + '/public')); //runs a "live-server"
app.use(cors());
var objectId = mongoose.Schema.ObjectId;
// var objectId = mongojs.ObjectId replaced with mongoose
app.listen(port, function(){
  console.log('listening on port ' + port);
});
mongoose.connect('mongodb://localhost/ecommerce');
mongoose.connection.once('open', function(){ //once the connectino is open, call this callback function
  console.log("connected to MongoDB");
});
// var db = mongojs('ecommerce'); replaced with mongoose
// var collection = db.collection('products') replaced with mongoose
var Product = require('./products');

app.post("/products", function(req, res, next) {
  var product = new Product(req.body);
  product.save(function(err, response){
    res.status(200).send(response);
  });
  // collection.insert(req.body, function(err, response){   commented out to replace mongojs with mongoose
  //   res.status(200).send(response)                       commented out to replace mongojs with mongoose
  // })                                                     commented out to replace mongojs with mongoose
});
app.get("/products/:id", function(req, res, next) {
  // collection.find(req.query, function (err, response){   commented out to replace mongojs with mongoose
  //   res.status(200).send(response)
  // })
});
app.get("/products", function(req, res, next) {
  Product.find(req.query, function(err, response){
    res.status(200).send(response);
  });
  // collection.find(req.query, function(err, response) {   commented out to replace mongojs with mongoose
  //   res.status(200).send(response)
  // })
});
app.put("/products/:id", function(req, res, next) {
  Product.update({_id: objectId(req.params.id)}, {$set: req.body}, function(err, response) {
    res.status(200).send(response);
  });
  // collection.update({_id: objectId(req.params.id)}, {$set: req.body}, function(err, response) {  commented out to replace mongojs with mongoose
  //   res.status(200).send(response)
  // })
});
app.delete("/products/:id", function(req, res, next) {
  Product.remove({_id: req.params.id}, function(err, response){
    res.status(200).send(response);
  });
  // collection.remove({_id: objectId(req.params.id)}, function(err, response){     commented out to replace mongojs with mongoose
  //   res.status(200).send(response)
  // })
});

var User = require('./user');


app.post('/api/order/:user_id', function(req, res, next){

});



app.get('/api/order/', function(req, res, next){

});



app.post('/api/cart/:user_id', function(req, res, next){
  User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(err, response){
    if (err) {
      return res.status(500).send(err);
    }
    else {
      res.status(200).send(response);
    }
  });
});



app.put('/api/cart/:user_id', function(req, res, next){

});

app.get('/api/user/:id', function(req, res, next){
  User.find(req.query, function(err, response){
    res.status(200).send(response);
  });
});

app.post('/api/user/:id', function(req, res, next){
  var user = new User (req.body);
  user.save(function(err, response){
    if (err) {
      return res.status(500).send(err);
    }
    else {
      res.status(200).send(response);
    }
  });
});
