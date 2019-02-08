const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

afterEach(async () => {
  await db("testing").truncate();
});

describe("SERVER", () => {
  describe("GET endpoint", () => {});

  describe("GET /items endpoint", () => {});

  describe("POST item endpoint", () => {});

  describe("DELETE item endpoint", () => {});
});
