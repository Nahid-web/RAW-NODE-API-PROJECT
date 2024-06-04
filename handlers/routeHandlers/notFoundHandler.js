/*
 * Title: Not Found Handler
 * Description: Not Found Handler
 * Author: Nahid Amin
 * Date: 1/06/2024
 *
 */

// module scaffolding
const handler = {};
handler.notFoundHandler = (requestProperties, callback) => {
    callback(404, {
        message: 'Your requested URL was not found',
    });
};

module.exports = handler;
