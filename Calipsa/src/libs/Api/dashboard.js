'use strict';

module.exports = (models) => {
    const {getData} = require('../../database/database')(models);

    function getDashboard() {
        return new Promise((resolve, reject) => {
            getData().then((_resp) => {
                resolve({'status': 'SUCCESS', 'data': _resp})
            })
        })

    }

    return {
        getDashboard
    }
}