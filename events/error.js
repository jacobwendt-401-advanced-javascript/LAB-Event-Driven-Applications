'use strict';

const event = require('./event');

event.on('error', (err) => {
  console.log('something wendt wrong', err)
});
