// Update with your config settings.
const path = require('path');

module.exports = {

    development: {
      client: 'mysql',
      connection: {
        host : '127.0.0.1',
        user : 'your_databse_username',
        password : 'your_databse_password',
        database : 'your_databse_name',
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
