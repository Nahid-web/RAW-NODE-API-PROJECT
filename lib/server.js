/*
 * Title: Server library
 * Description: Server related files
 * Author: Nahid Amin
 * Date: 24/06/2024
 *
 */

// dependencies
const http = require('http');

const { handleReqRes } = require('../helpers/handleRegRes');
const environmentToExport = require('../helpers/environments');

// App object -module scattering
const server = {};

// configuration

// create server
server.createServer = () => {
    const createServerVariable = http.createServer(server.handleReqRes);
    createServerVariable.listen(environmentToExport.port, () => {
        console.log(`Listening to port ${environmentToExport.port}`);
    });
};

// handle Request Response
server.handleReqRes = handleReqRes;

// start the server
server.init = () => {
    server.createServer();
};

// export
module.exports = server;
