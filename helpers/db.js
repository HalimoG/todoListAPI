"use strict";

module.exports = knex => {
  return {
    getListsByUserID: id => {
      return knex("lists")
        .select("*")
        .join("items", "items.list_id", "=", "lists.id")
        .where({ "lists.user_id": id })
        .where({ "items.status": "PENDING" })
        .catch(err => console.log(err));
    },
    createListByUserID: (id, title) => {
      return knex("lists")
        .insert({ title: title, user_id: id })
        .catch(err => console.log(err));
    },
    removeListByListID: id => {
      return knex("lists")
        .where({ "lists.id": id })
        .del();
    },
    createItemByListID: (id, description, due_date) => {
      return knex("items")
        .insert({
          desc: description,
          list_id: id,
          status: "PENDING",
          due_date: due_date
        })
        .catch(err => console.log(err));
    },
    updateItemByItemID: (id, description) => {
      return knex("items")
        .update({ desc: description, list_id: id, status: "PENDING" })
        .catch(err => console.log(err));
    },
    completeTask: id => {
      return knex("items")
        .where({ id: id })
        .update({ status: "COMPLETE" })
        .catch(err => console.log(err));
    }
  };
};
