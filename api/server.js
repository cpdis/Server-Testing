const express = require("express");
const configMiddleware = require("../config/middleware");
const server = express();
const db = require("../data/dbConfig");

configMiddleware(server);

server.get("/", async (req, res) => {
  res.status(200).json({ message: "WORKING!" });
});

server.get("/", async (req, res) => {
  const items = await db("testing");
  res.status(200).json(items);
});

server.post("/items", async (req, res) => {
  const newItem = req.body;
  const inserted = await db("testing").insert(newItem);
  res.status(201).json(inserted);
});

server.delete("/items/:id", async (req, res) => {
  const { id } = req.params;
  const deletedItem = await db("testing")
    .where({ id })
    .del();
  res.status(200).json(deletedItem);
});

module.exports = server;
