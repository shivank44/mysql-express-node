// Update with your config settings.
const path = require('path');
require('dotenv').config({ path: '.env' });

module.exports = {

    [process.env.NODE_ENV || 'development']: {
      client: 'mysql2',
      connection: {
        host : process.env.DB_HOST,
        user : process.env.DB_USERNAME,
        password : process.env.DB_PASSWORD,
        database : process.env.DB_DATABASE,
        charset: 'utf8'
      },
      migrations: {
        directory: __dirname + '/database/migrations',
      },
      seeds: {
        directory: __dirname + '/database/seeds'
      }
    }
};
