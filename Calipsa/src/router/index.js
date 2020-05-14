'use strict'

module.exports = (app, models) => {
  const routes = {};
    const fs = require('fs');

    fs
      .readdirSync(__dirname)
      .filter((file) => {
        return (file.indexOf('.') !== 0) && (file !== 'index.js');
      })
      .forEach((file) => {
          const cd = file.replace('.js', '');

          routes[cd] = require('./' + file)(app, models);
      });

      return routes;
}
