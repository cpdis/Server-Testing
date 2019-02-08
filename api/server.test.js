const request = require("supertest");
const db = require("../data/dbConfig");
const server = require("./server");

afterEach(async () => {
  await db("items").truncate();
});

describe("SERVER", () => {
  describe("GET endpoint", () => {
    it("Respond with status code 200", async () => {
      let res = await request(server).get("/");
      expect(res.status).toBe(200);
    });

    it("Respond with JSON", async () => {
      let res = await request(server).get("/");
      expect(res.type).toMatch(/json/i);
    });
  });

  describe("GET /items endpoint", () => {
    it("Respond with status code 200", async () => {
      let res = await request(server).get("/items");
      expect(res.status).toBe(200);
    });

    it("Respond with JSON", async () => {
      let res = await request(server).get("/items");
      expect(res.type).toMatch(/json/i);
    });
  });

  describe("POST item endpoint", () => {});

  describe("DELETE item endpoint", () => {});
});
