module.exports = function (app) {
    var Membership = require('test.controller');
    
    app.route('/test').post(Membership.create);
    app.route('/test').get(Membership.retrieve);
    app.route('/test/#').get(Membership.read);
    app.route('/test/#').patch(Membership.update);
    app.route('/test/#').put(Membership.replace);
    app.route('/test/#').delete(Membership.delete);
};