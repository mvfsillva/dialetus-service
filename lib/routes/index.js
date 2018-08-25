var genericroute = require('./generic-route'),
    genericrestful = require('./generic-restful-route');
    // establishmentroute = require('./establishment'),
    // cardroute = require('./card'),
    // studentroute = require('./student'),
    // deviceroute = require('./device'),
    // dashboardroute = require('./dashboard-route'),
    // dashboardvproute = require('./dashboardvendaplanos-route'),
    // altloginroute = require('./altlogin'),
    // notificationroute = require('./notification-route'),
    // managerroute = require('./manager'),
    // userroute = require('./users'),
    // noticesroute = require('./notices');

module.exports = function (app, mongoose, urlbase) {

    var dbmodels = require('../persistence')(mongoose);

    app = genericrestful(app, dbmodels.Bahia, urlbase + '/bahia');
    // app = genericrestful(app, dbmodels.ActivityTime, urlbase + '/activitytime');
    // app = studentroute(app, dbmodels.Student, dbmodels.Card.getDBModel(), urlbase + '/student');
    // app = cardroute(app, dbmodels.Card, urlbase + '/card');

    // app = establishmentroute(app, dbmodels.Establishment, urlbase + '/establishment');
    // app = genericrestful(app, dbmodels.Banner.getDBModel(), urlbase + '/banner');
    // app = noticesroute(app, dbmodels.Notice, urlbase + '/notice');
    // app = deviceroute(app, dbmodels.Device, urlbase + '/device');
    // app = dashboardvproute(app, dbmodels.DashboardVendaPlanos, urlbase + '/dashboardvendaplanos');
    // app = dashboardroute(app, dbmodels.Dashboard, urlbase + '/dashboard');    
    // app = userroute(app, dbmodels.oauthusers, urlbase + '/user');
    // app = managerroute(app, dbmodels.Manager, urlbase + '/manager');
    // app = altloginroute(app, dbmodels.oauthaccesstokens,dbmodels.oauthusers , 'useroauth');
    // app = notificationroute(app, dbmodels.Notice,dbmodels.Device.getDBModel() , 'notification/notice-notify');
    // app = notificationroute(app, dbmodels.Notice,dbmodels.ManagerDevice.getDBModel() , 'notification/manager');

    return app;
}