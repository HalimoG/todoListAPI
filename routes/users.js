"use strict";

const express = require("express");
const router = express.Router();

module.exports = dbHelpers => {
  router.get("/:id/lists", async (req, res) => {
    const lists = await dbHelpers.getListsByUserID(req.params.id);
    res.json(lists);
  });

  router.post("/:id/lists", async (req, res) => {
    console.log(req.body);
    await dbHelpers.createListByUserID(req.params.id, req.body.title);
    res.sendStatus(200);
  });

  router.delete("/lists/:listID", async (req, res) => {
    await dbHelpers.removeListByListID(req.params.listID);
    res.sendStatus(200);
  });

  router.post("/lists/:listID/item", async (req, res) => {
    await dbHelpers.createItemByListID(
      req.params.listID,
      req.body.description,
      req.body.due_date
    );
    res.sendStatus(200);
  });

  router.put("/items/:itemID", async (req, res) => {
    await dbHelpers.completeTask(req.params.itemID);
    res.sendStatus(200);
  });

  return router;
};
