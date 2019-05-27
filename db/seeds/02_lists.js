exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("lists")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("lists").insert([
        { title: "groceries", user_id: 1 },
        { title: "books to read", user_id: 1 },
        { title: "recipes to try", user_id: 1 }
      ]);
    });
};
