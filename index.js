/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up or down time of user defined links
 * Author: Nahid Amin
 * Date: 1/06/2024
 *
 */

// dependencies
const http = require('http');

const { handleReqRes } = require('./helpers/handleRegRes');
const environmentToExport = require('./helpers/environments');
const data = require('./lib/data');

// App object -module scattering
const app = {};

// testing file system
// data.create('test', 'newFile', {name : 'Nahid', realigious: 'Islam'}, (err)=>{
//     console.log(`error was `, err);
// })

// data.read('test', 'newFile', (err, result) => {
//     console.log(err, result);
// });

// data.update('test', 'newFile', { name: 'Walifa', realigius: 'Islam' }, (err) => {
//     console.log('error was', err);
// });

data.delete('test', 'newFile', (err) => {
    console.log('error is', err);
});
// configuration

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environmentToExport.port, () => {
        console.log(`Listening to port ${environmentToExport.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;
// start the server
app.createServer();
