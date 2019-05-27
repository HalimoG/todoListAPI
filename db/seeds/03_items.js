exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          desc: "2 apple, 1 banana",
          list_id: 1,
          status: "PENDING",
          due_date: "2020-02-01"
        },
        {
          desc: "Bluest Eye, Beloved",
          list_id: 2,
          status: "PENDING",
          due_date: "2019-04-01"
        },
        {
          desc: "tirmisu, chicken alfredo",
          list_id: 3,
          status: "COMPLETE",
          due_date: "2019-05-05"
        }
      ]);
    });
};
