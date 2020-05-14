'use strict';

module.exports = (models) => {
    const {pushData} = require('../../database/database')(models);
    const {auth} = require('../authentication');


    function processImage(data, headers) {
        return new Promise((resolve, reject) => {
            if (auth('HTTP', headers)) {
                pushData(data);
                resolve({'status': 'SUCCESS', error: null, data: {msg: 'Image Processed Successfully'}})
            } else {
                reject({'status': 'UNAUTHORIZED', data: null, error: {'msg': 'User is not authorized to perform this operation'}});
            }
        })

    }

    return {
        processImage
    }
}