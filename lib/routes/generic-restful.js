
module.exports = function (modelSchema) {
    var me = {};

    me.list = function (req, res, next) {
        delete req.query.access_token;

        modelSchema.find(req.query, function (err, entities) {
            if (err) return next(err);
            res.json(entities);
        });
    };

    me.create = function (req, res, next) {
        modelSchema.create(req.body, function (err, entity) {
            if (err) {
                return next();
            }
            res.statusCode = 201;
            res.json(entity);
        });
    };

    me.update = function (req, res, next) {
        modelSchema.findByIdAndUpdate(req.params.id, req.body, function (err, entity) {
            if (err) return next(err);
            res.json(entity);
        });
    };

    me.load = function (req, res, next) {
        modelSchema.findById(req.params.id, function (err, entity) {
            if (err) return next(err);
            res.json(entity);
        });
    };

    me.delete = function (req, res, next) {
        modelSchema.findByIdAndRemove(req.params.id, req.body, function (err, entity) {
            if (err || entity === null) return next(err);
            entity.remove(); // workarround for trigger the post('remove') hook
            res.json(entity);
        });
    };

    return me;
};