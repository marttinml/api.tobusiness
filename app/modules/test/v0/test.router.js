module.exports = function (app) {
    var Test = require('./test.controller');
    
    app.route('/v0/test').post(Test.create);
    app.route('/v0/test').get(Test.retrieve);
    // app.route('/v0/test/#').get(Test.read);
    // app.route('/v0/test/#').patch(Test.update);
    // app.route('/v0/test/#').put(Test.replace);
    // app.route('/v0/test/#').delete(Test.delete);
};