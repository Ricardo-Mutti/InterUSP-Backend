
  var mongo = require('mongodb').MongoClient;
  var ObjectId = require('mongodb').ObjectID;
  var env = require("../config");

  var mongoURI = env.mongoURI;

// GET

exports.posts = function (req, res) {
  mongo.connect(mongoURI, function(err, db) {
    db.collection('posts').find().toArray(function(err, doc){
      if (err) throw err;

      console.dir(doc);
      res.json({
        posts: doc
      });
      return db.close();
    });
  });
};

exports.post = function (req, res) {
  var id = req.params.id;
  console.dir(id);

  mongo.connect(mongoURI, function(err, db) {
    var cursor = db.collection('posts').find({_id : ObjectId(id)})
    cursor.each(function(err, doc) {
      if (err) throw err;

      if (doc != null) {
         console.dir(doc);
         res.json({
            post: doc
          });
          return db.close();
      }
   });
  });
};

// POST
exports.addPost = function (req, res) {
  console.dir(req.body);
  mongo.connect(mongoURI, function(err, db) {
    db.collection('posts').insertOne(req.body, function(err, result){
      if (err) throw err;

      console.dir(result);
      res.json(true);
      return db.close();
    });
  });
};

// PUT
exports.editPost = function (req, res) {
  console.dir(req.body);
  var id = req.params.id;

  var query = {
    _id : ObjectId(id)
  }
  var update = {
    $set: {

      title: req.body.title,

      text: req.body.text

    }
  }

  mongo.connect(mongoURI, function(err, db) {
    db.collection('posts').update(query, update, {upsert: true}, function(err, result){
      if (err) throw err;

      console.dir(result);
      res.json(true);
      return db.close();
    });
  });
};

// DELETE
exports.deletePost = function (req, res) {
  var id = req.params.id;
  var query = {
    _id : ObjectId(id)
  }
  mongo.connect(mongoURI, function(err, db) {
   db.collection('posts').deleteOne(query, function(err, result) {
      if (err) throw err;

      console.dir(result);
      res.json(true);
      return db.close();
    });  
  });
};

