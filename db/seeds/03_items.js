exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        { title: "buy groceries", desc: "2 apple, 1 banana", list_id: 1 }
      ]);
    });
};
