var express = require('express'),
  timeout = require('connect-timeout'),
//   errorhandler = require('errorhandler'),
  bodyParser = require('body-parser'),
//   cookieParser = require('cookie-parser'),
//   cookieSession = require('cookie-session'),
  path = require('path'),
  app = express(),
  config = require('./config'),
  cors = require('cors');

module.exports = function (mongoose, debug) {

//   var pmx = require('pmx').init({
//     http: true
//   });
  var server = require('http').Server(app);

  debug = typeof debug !== undefined ? debug : false;

  if (!mongoose) {

    mongoose = require('mongoose');
    var uristring = 'mongodb://'+config.connection.server+':'+config.connection.port+'/'+config.connection.database;
    // Makes connection asynchronously. Mongoose will queue up database
    // operations and release them when the connection is complete.
    mongoose.connect(uristring, function (err, res) {
      if (err) {
        console.log(err);
        console.log('ERROR connecting to: ' + uristring + '. ' + err);
      } else {
        console.log('Succeeded connected to: ' + uristring);
      }
    });

  }

  mongoose.Promise = require('bluebird');

//   var middleware = require('./middleware')(mongoose);

  app.use(timeout('300s'));

  app.use(cors());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({ limit: '10mb' }));

  function haltOnTimedout(req, res, next) {
    if (!req.timedout) next();
  }
  app.use(haltOnTimedout);

  app.use(express.static(path.join(__dirname, 'public')));

  app.oauth = require('./oauth')(mongoose);

  app.use(function (err, req, res, next) {

    if (err) {
      var dateLog = new Date();
      if (process.env.NODE_ENV !== 'test') {
        console.error('Error [ ' + dateLog + ' - ' + req.method + ' ' + req.originalUrl + ' ] :', err);
      }

      if (middleware.isValidationError(err)) {
        res.status(400).send(err.errors);
      } else {
        res.status(500).send('Error');
      }
    }
    next();
  });

  if ('development' === app.get('NODE_ENV')) {
    app.use(errorhandler());
  }

//   app.post('/oauth/token', app.oauth.grant());

//   if (!debug) {
//     app.use('/api', middleware.requiresUser);
//   }

  app = require('./routes')(app, mongoose, 'api');

  app.use(app.oauth.errorHandler());

//   var websocketio = require('./services/syncservice')(mongoose, server);

  app.set('port', process.env.PORT || config.app.port);

//   app.server = server.listen(app.get('port'), function () {
//     if (!debug) {
//       //TODO - Utilizar a biblioteca de log
//       console.log('Express server listening on port ' + app.get('port'));
//       require('./routes/listroutes')(app._router.stack);
//     }
//   });

  return app;

}