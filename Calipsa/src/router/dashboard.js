'use strict'

module.exports = function(app, models) {
    const {STATUS_CODES} = require('../utils/constants')
    const router = app.Router();
    const {getDashboard} = require('../libs/Api/dashboard')(models);


    router.get('/', (req, res) => {
      getDashboard().then((_res) => {
        res.status(STATUS_CODES[_res.status]).json(_res.data);
      }).catch((error) => {
        res.status(STATUS_CODES[error.status]).json(error.error);
      });
    });

return router

}