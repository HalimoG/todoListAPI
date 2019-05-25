exports.up = function(knex, Promise) {
  return knex.schema.createTable("lists", function(table) {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("title");
    table.bigInteger("user_id").references("users.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("lists");
};
