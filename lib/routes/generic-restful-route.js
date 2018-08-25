module.exports = function (app, modelSchema, urlName) {
    var me = {};

    var genericrestful = require('./generic-restful')(modelSchema);

    app.get('/' + urlName, genericrestful.list);
    app.post('/' + urlName, genericrestful.create);

    app.put('/' + urlName + '/:id', genericrestful.update);
    app.get('/' + urlName + '/:id', genericrestful.load);
    app.delete('/' + urlName + '/:id', genericrestful.delete);

    return app;
};