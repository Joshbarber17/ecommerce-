var express = require('express');
var bodyParser= require('body-parser');
var cors = require('cors');
var mongojs = require('mongojs');
var app = express();
app.use(bodyParser.json());
var port = 2020;
app.use(express.static(__dirname + '/public')); //runs a "live-server"
app.use(cors());
var objectId = mongojs.ObjectId
app.listen(port, function(){
  console.log('listening on port ' + port);
})
var db = mongojs('ecommerce');
var collection = db.collection('products')

app.post("/products", function(req, res, next) {
  collection.insert(req.body, function(err, response){
    res.status(200).send(response)
  })
})
app.get("/products/:id", function(req, res, next) {
  collection.find(req.query, function (err, response){
    res.status(200).send(response)
  })
})
app.get("/products", function(req, res, next) {
  collection.find(req.query, function(err, response) {
    res.status(200).send(response)
  })
})
app.put("/products/:id", function(req, res, next) {
  collection.update({_id: objectId(req.params.id)}, {$set: req.body}, function(err, response) {
    res.status(200).send(response)
  })
})
app.delete("/products/:id", function(req, res, next) {
  collection.remove({_id: objectId(req.params.id)}, function(err, response){
    res.status(200).send(response)
  })
})
