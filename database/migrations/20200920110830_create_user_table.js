
exports.up = function(knex) {
    return knex.schema.createTable('users',(table) => {
        table.increments();
        table.string('first_name');
        table.string('last_name');
        table.string('email');
        table.string('password');
        table.string('role');
        table.integer('status').defaultTo('1');;
        table.timestamps(false, true);
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
