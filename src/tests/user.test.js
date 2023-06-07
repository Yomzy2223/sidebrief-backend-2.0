const request = require("supertest");
const app = require("../../index");

describe("GET /users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/services");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

describe("POST /users", () => {
  it("should create a new user", async () => {
    const res = await request(app).post("/users").send({
      name: "Bamidele",
      description: "this is usman service category",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.name).toBe("Bamidele");
  });
});
