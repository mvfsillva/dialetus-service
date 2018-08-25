var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bahiaSchema = new Schema({
    // establishment
    establishment: {
        type: Schema.Types.ObjectId,
        ref: 'Bahia'
    },
    dialeto: {
        type: String,
        required: true
    },
    significados: {
        type: [String],
        required: true
    },
    exemplos: {
        type: [String],
        required: true
    },
    days: []
});

module.exports = function (dbclient){
    return dbclient.model('bahia', bahiaSchema); 
}