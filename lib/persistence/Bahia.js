module.exports = function (dbclient) {
    var me = {};

    var dbModel = require('./model/BahiaModel')(dbclient);

    me.getDBModel = function () {
        return dbModel;
    }

    // me.find = function (unitId, callback) {
    //     dbModel.find({ establishment: unitId }, callback);
    // }

    // me.create = function (body, callback) {
    //     dbModel.create(body, callback);
    // }

    // me.remove = function (unitId, callback) {
    //     dbModel.remove({ establishment: unitId }, callback);
    // }


    return me;
}

