/*jslint node:true*/
var express         = require("express"),
    bodyParser      = require('body-parser'),
    methodOverride  = require('method-override'),
    app             = express(),
    session         = require('express-session');

    module.exports = function(){

        app.use(bodyParser.urlencoded({
            extended: true
        }));

        app.use(function (req, res, next) {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
        res.setHeader('Access-Control-Allow-Credentials', true);
        next();
    });

    var VERSIONS = {'Pre-Production': '/v0'};
    app.get('/', function(req, res) {
        res.json(VERSIONS);
    })
    

    app.use(bodyParser.json());
    app.use(methodOverride());
    
    for (var k in VERSIONS) {
        require('../app/routes' + VERSIONS[k])(app) ;
    }

    //require('../app/routes/subject.route')(app);

    return app;
};








