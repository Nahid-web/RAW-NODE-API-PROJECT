/*
 * Title: Check Handler
 * Description: Handler to handle user related routes
 * Author: Nahid Amin
 * Date: 11/06/2024
 *
 */
// dependencies
const { hash, parseJSON } = require('../../helpers/utiliteis');
const data = require('../../lib/data');

const tokenHandler = require('./tokenHandler');

// module scaffolding
const handler = {};

handler.checkHandler = (requestProperties, callback) => {
    const acceptedMethods = ['get', 'post', 'put', 'delete'];
    if (acceptedMethods.indexOf(requestProperties.method) > -1) {
        handler._check[requestProperties.method](requestProperties, callback);
    } else {
        callback(405);
    }
};

handler._check = {};

handler._check.post = (requestProperties, callback) => {};

handler._check.get = (requestProperties, callback) => {};

handler._check.put = (requestProperties, callback) => {};
handler._check.delete = (requestProperties, callback) => {};

module.exports = handler;
