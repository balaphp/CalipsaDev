'use strict'

module.exports = function(app, models) {
    const {STATUS_CODES} = require('../utils/constants')
    const router = app.Router();
    const {processImage} = require('../libs/Api/processImage')(models);
    const {Sources} = require('../utils/constants');
    const {formatMessage} = require('../utils/util');

    router.post('/', (req, res) => {

        processImage(formatMessage(Sources.API, req.body.record), req.headers).then((_res) => {

        res.status(STATUS_CODES[_res.status]).json(_res.data);
      }).catch((error) => {
        res.status(STATUS_CODES[error.status]).json(error.error);
      });
    });

return router

}