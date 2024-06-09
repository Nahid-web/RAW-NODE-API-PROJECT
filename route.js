/*
 * Title: Route
 * Description: Application Routes
 * Author: Nahid Amin
 * Date: 1/06/2024
 *
 */
// dependencies
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
