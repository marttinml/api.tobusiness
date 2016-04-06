module.exports.create = function(db, data, callback) {
  //var valid = Util.validateModel(data, { required:['key'], number:['key'], string:['name','description'] });
  var valid = true;
  if(valid){
      db.collection('test').insertOne( {
          name            : data.name,
          description     : data.description,
          date            : new Date(),
      }, function(err, result){
          delete result.ops[0]._id
          callback(err, result.ops[0], 200);
      } );
  }else{
    callback(null, 'Invalid Model', 201);
  }
};

module.exports.retrieve = function(db, callback) {
   var result = [];
   var cursor = db.collection('test').find({});
   cursor.each(function(err, doc) {
      if (doc != null) {
          delete doc._id
          delete doc.date
         result.push(doc);
      } else {
         callback(result);
      }
   });
};

module.exports.detail = function(db, callback) {
   var result = {};
   var cursor = db.collection('test').find({});
   cursor.each(function(err, doc) {
      if (doc != null) {
          delete doc._id
          delete doc.date
         result.push(doc);
      } else {
         callback(result);
      }
   });
};