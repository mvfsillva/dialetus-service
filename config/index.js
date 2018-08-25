// module.exports = {
//   port: process.env.PORT,
//   database: process.env.DATABASE,
// }


var nodeEnv = process.env.NODE_ENV !== undefined ? process.env.NODE_ENV : 'production';

var config = {
    development: require('./development'),
    production: require('./production'),
    test: require('./test')
};

module.exports = config[nodeEnv];
