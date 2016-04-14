var TestModel 	= require('./test.model'),
    assert      = require('assert'),
    Connection  = require('../../../config/mongodb'),
    Log         = require('../../../shared/log'),
    controller  = 'test';

module.exports.create = function (req, res) {
    console.log(req);
    var d   = new Date();
    start   = d.getMilliseconds();
    Log.logStart({controller : controller, method:'Test.create', d : d, body:req.body });
	Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
        TestModel.create(db, req.body, function(err, result, status) {
            assert.equal(err, null);
            db.close();
            Log.logEnd({ start : start , response: result});
            //response
            res.status(status).jsonp(result);
        });
    });
};

module.exports.retrieve = function (req, res) {
    var d   = new Date();
    start   = d.getMilliseconds();
    Log.logStart({controller : controller, method:'Test.retrieve', d : d, body:req.body });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
      TestModel.retrieve(db, function(result) {
          db.close();
          Log.logEnd({ start : start , response: result});
          res.status(200).jsonp(result);
      });
    });
};

module.exports.detail = function (req, res) {
    var d   = new Date();
        start   = d.getMilliseconds();
        Log.logStart({controller : controller, method:'Test.detail', d : d, body:req.params });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
      TestModel.detail(db, req.params.id, function(result) {
          db.close();
          Log.logEnd({ start : start , response: result});
          res.status(200).jsonp(result);
      });
    });
};