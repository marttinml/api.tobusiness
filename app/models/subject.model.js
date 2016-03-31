exports.statusInsertModel = function(db, data, callback) {
  //var valid = Util.validateModel(data, { required:['key'], number:['key'], string:['name','description'] });
  var valid = true;
  if(valid){
      db.collection('subject_status').insertOne( {
          key             : data.key,
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
exports.statusFindModel = function(db, data, callback) {
   var result = [];
   var cursor = db.collection('subject_status').find(data);
   cursor.each(function(err, doc) {
      if (doc != null) {
          delete doc._id
         result.push(doc);
      } else {
         callback(result);
      }
   });
};
exports.statusUpdateModel = function(db, data, callback){
 //var valid = Util.validateModel(data, { required:['key'], number:['key'], string:['name','description'] });
  var valid = true;
  if(valid){

    var where = { key : data.key };
      delete data._id;

      db.collection('subject_status').updateOne(
        where,
        data, 
        callback );

  }else{
    callback(null, 'Invalid Model', 201);
  }
};




exports.insertModel = function(db, data, callback) {
  //var valid = Util.validateModel(data, { required:['key'], number:['key'], string:['name','description'] });
  var valid = true;
  if(valid){
      db.collection('subject').insertOne( {
          key             : data.key,
          name            : data.name,
          description     : data.description,
          status_obj     : data.status_obj,
          date            : new Date(),
      }, function(err, result){
          delete result.ops[0]._id
          callback(err, result.ops[0], 200);
      } );
  }else{
    callback(null, 'Invalid Model', 201);
  }
};
exports.findModel = function(db, data, callback) {
   var result = [];
   var cursor = db.collection('subject').find(data);
   cursor.each(function(err, doc) {
      if (doc != null) {
          delete doc._id
         result.push(doc);
      } else {
         callback(result);
      }
   });
};
exports.updateModel = function(db, data, callback){
 //var valid = Util.validateModel(data, { required:['key'], number:['key'], string:['name','description'] });
  var valid = true;
  if(valid){

    var where = { key : data.key };
      delete data._id;

      db.collection('subject').updateOne(
        where,
        data, 
        callback );

  }else{
    callback(null, 'Invalid Model', 201);
  }
};








exports.removeDocument = function(db, data, callback) {
   db.collection('membership').deleteMany(
      data,
      function(err, results) {
         callback(results);
      }
   );
};


exports.login = function(db, data, callback) {
    var result = false;
   var cursor = db.collection('membership').find(data);
   cursor.each(function(err, doc) {
      if (doc != null) {
         result = true;
      } else {
         callback(result);
      }
   });
};


exports.insertToken = function(db, data, callback) {
  var where = { user : data.user, password : data.password };
   db.collection('membership').updateOne(
      where,
      {
        $set: { "session.token": data.token },
        $currentDate: { "lastModified": true }
      }, function(err, results) {

        exports.findDocument(db, where, function(result){
          callback(result[0]);
        })
      
   });
};

exports.checkToken = function(db, data, callback) {
  var where = { user : data.user, password : data.password };

        exports.findDocument(db, where, function(result){
          db.close();
          var endResult = result[0].session.token == data.session.token ? true : false;
          callback(endResult);
        });
};
