var controller  = 'Subject.controller',
    Subject     = require('../models/subject.model'),
    Log         = require('../utils/log.util'),
    Connection  = require('../utils/connection.util'),
    assert      = require('assert');


// Actions
exports.statusInsert = function (req, res) {
     var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'statusInsert', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
        Subject.statusInsertModel(db, req.body, function(err, result, status) {
            assert.equal(err, null);
            db.close();
            Log.logEnd({ start : start , response: result});
            //response
            res.status(status).jsonp(result);
        });
    });
};
exports.statusFind = function (req, res) {
    var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'statusFind', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
      Subject.statusFindModel(db, {}, function(result) {
          db.close();
          Log.logEnd({ start : start , response: result});
          res.status(200).jsonp(result);
      });
    });
};
exports.statusFindByKey = function (req, res) {
    var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'statusFindByKey', d : d, body:req.params });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
      Subject.statusFindModel(db, { key : Number(req.params.id) }, function(result) {
          db.close();
          Log.logEnd({ start : start , response: result});
          res.status(200).jsonp(result);
      });
    });
};
exports.statusUpdate = function (req, res) {
     var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'statusUpdate', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
        Subject.statusUpdateModel(db, req.body, function(err, results) {
            assert.equal(err, null);
            db.close();
            Log.logEnd({ start : start , response: results.result});
            //response
            var result = results.result.nModified ? req.body : 'Fail to statusUpdate';
            res.status(200).jsonp(result);
        });
    });
    
};


exports.insert = function (req, res) {
     var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'insert', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
        Subject.insertModel(db, req.body, function(err, result, status) {
            assert.equal(err, null);
            db.close();
            Log.logEnd({ start : start , response: result});
            //response
            res.status(status).jsonp(result);
        });
    });
};
exports.find = function (req, res) {
    var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'find', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
      Subject.findModel(db, req.body || {}, function(result) {
          db.close();
          Log.logEnd({ start : start , response: result});
          res.status(200).jsonp(result);
      });
    });
};
exports.update = function (req, res) {
     var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'update', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
        Subject.updateModel(db, req.body, function(err, results) {
            assert.equal(err, null);
            db.close();
            Log.logEnd({ start : start , response: results.result});
            //response
            var result = results.result.nModified ? req.body : 'Fail to statusUpdate';
            res.status(200).jsonp(result);
        });
    });
    
};