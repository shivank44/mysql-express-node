const bcrypt = require("bcrypt");
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      var salt = bcrypt.genSaltSync(10);
      var hash = bcrypt.hashSync("secret", salt);
      return knex('users').insert([
        {first_name: 'super', last_name: 'admin', email: 'superadmin@user.com', password:hash, role:"superadmin", status: '1'}
      ]);
    });
};
