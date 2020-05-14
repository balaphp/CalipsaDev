'use strict';

module.exports = (models) => {
  const {pushData} = require('../../database/database')(models);
  const app = require('express')();
  const server = require('http').Server(app);
  const io = require('socket.io')(server);
  const {auth} = require('../authentication');
  const {Sources} = require('../../utils/constants');
  const {formatMessage} = require('../../utils/util');
  const listOfAllowedSocket = [];

  server.listen(3000);

  console.log('SOCKET SERVER LISTENING on localhost:3000'); //eslint-disable-line no-console
  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
  });

  io.on('connection', (socket) => {
    socket.emit('news', {listen: 'true'});
    socket.on('registerMe', (data) => {
      if (auth('WS', data)) {
        listOfAllowedSocket.push(socket.id);
      } else {
        socket.emit('error', 'Incorrect Auth Information. connection request rejected');
        socket.close();
      }
    })

    socket.on('sendData', (data) => {
      if (listOfAllowedSocket.includes(socket.id)) {
        if (data.record) {
          data.record.startTime = process.hrtime();
          pushData(formatMessage(Sources.WS, data.record)).then((_res) => {
            socket.emit('success', 'Data sent sucessfully');
        });
        }
      }
    })


  });
}
