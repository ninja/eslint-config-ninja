'use strict';

const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '.eslintrc');

try {
  module.exports = JSON.parse(fs.readFileSync(file, 'utf8'));
}
catch (error) {
  const message = `Error reading ${file}.`;

  console.error(message);

  error.message = message;

  throw error;
}
