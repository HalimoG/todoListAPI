exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
