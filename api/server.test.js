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

  describe("POST item endpoint", () => {
    it("Respond with 201 when item created", async () => {
      let body = { item: "Hello" };
      let res = await request(server)
        .post("/items")
        .send(body);
      expect(res.status).toBe(201);
    });

    it("Return the id of the created item", async () => {
      let body = { item: "Hello" };
      let res = await request(server)
        .post("/items")
        .send(body);
      expect(res.body).toEqual([1]);
    });
  });

  describe("DELETE item endpoint", () => {});
});
