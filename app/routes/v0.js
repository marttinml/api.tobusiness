module.exports = function (app) {
    var Subject = require('../controllers/subject.controller');

    //IFU
    app.route('/v0/subject/status').get(Subject.statusFind).post(Subject.statusInsert);
    app.route('/v0/subject/status/:id').get(Subject.statusFindByKey).put(Subject.statusUpdate);

    app.route('/v0/subject.insert').post(Subject.insert);
    app.route('/v0/subject.find').post(Subject.find);
    app.route('/v0/subject.update').post(Subject.update);
};