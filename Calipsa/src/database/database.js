'use strict'

const {getDurationInMilliseconds} = require('../utils/util');

module.exports = (models) => {
    function pushData (data) {
        data.duration = getDurationInMilliseconds(data.message.startTime).toLocaleString();
        delete data.message.startTime;

return new Promise((resolve, reject) => {
            models.get('data').push(data).write();
            resolve(true);
        })

    }

    function getData() {
        return new Promise((resolve, reject) => {
            models.get('data');
            resolve(models.get('data'));
        });

    }

    return {
        pushData,
        getData
    }

}