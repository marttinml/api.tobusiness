var TestModel 	= require('./test.model'),
    assert      = require('assert'),
    Connection  = require('../../../config/mongodb'),
    Log         = require('../../../shared/log'),
    controller  = 'test';

module.exports.create = function (req, res) {
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
        Log.logStart({controller : controller, method:'statusFindByKey', d : d, body:req.params });
    Connection.ejecute(function(err, db){
        assert.equal(null, err);
        //ejecute query
      Subject.detail(db, { key : Number(req.params.id) }, function(result) {
          db.close();
          Log.logEnd({ start : start , response: result});
          res.status(200).jsonp(result);
      });
    });
};