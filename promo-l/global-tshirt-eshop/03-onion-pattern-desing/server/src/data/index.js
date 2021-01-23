const Database = require('better-sqlite3');
const path = require('path');

let db;

const init = () => {
  const dbPath = path.join(__dirname, '/../../db/data.db');
  module.exports.db = new Database(dbPath, { verbose: console.log });
};

module.exports = {
  init: init
};
