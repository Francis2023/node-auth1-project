exports.up = function(knex) {
   return knex.schema
      .createTable('logins', tbl => {
         tbl.increments();
         tbl.text('email')
           .notNullable()
           .unique();
         tbl.text('password')
           .notNullable();
      })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('logins')
};