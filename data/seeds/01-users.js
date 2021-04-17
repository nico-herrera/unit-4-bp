
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'nico', secret: '1234'},
        {id: 2, username: 'sam', secret: '1234'},
        {id: 3, username: 'tony', secret: '1234'}
      ]);
    });
};
