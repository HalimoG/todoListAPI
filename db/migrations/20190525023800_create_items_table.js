exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", function(table) {
    table
      .increments("id")
      .unsigned()
      .primary();
    table.string("desc");
    table.string("status");
    table.string("due_date");
    table.bigInteger("list_id").references("lists.id");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
