/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Nahid Amin
 * Date: 1/06/2024
 *
 */

// dependencies
const server = require('./lib/server');
const workers = require('./lib/worker');

// App object -module scattering
const app = {};

// configuration

// create server
app.init = () => {
    // start the sever
    server.init();

    // start the worker
    workers.init();
};

app.init();

// export the app
module.exports = app;
