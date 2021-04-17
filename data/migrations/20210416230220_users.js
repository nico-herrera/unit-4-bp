
exports.up = function(knex) {
  return knex.schema.createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('username').unique().notNullable();
      tbl.string('secret', 250)
  })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
