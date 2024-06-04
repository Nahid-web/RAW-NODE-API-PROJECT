/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Nahid Amin
 * Date: 1/06/2024
 *
 */

// module scaffolding
const handler = {};
handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is sample url',
    });
};
module.exports = handler;
