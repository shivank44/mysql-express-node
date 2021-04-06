const bcrypt = require("bcrypt");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("secret", salt);
      return knex('users').insert([
        {
          "first_name": 'super',
          "last_name": 'admin',
          "email": 'superadmin@user.com',
          "password": hash,
          "role": "superadmin",
          "status": '1',
          "is_delete": '0'
         },
         {
          "first_name": 'admin',
          "last_name": 'admin',
          "email": 'admin@user.com',
          "password": hash,
          "role": "admin",
          "status": '1',
          "is_delete": '0'
         },
         {
          "first_name": 'user',
          "last_name": 'user',
          "email": 'user@user.com',
          "password": hash,
          "role": "user",
          "status": '1',
          "is_delete": '0'
         }
      ]);
    });
};
