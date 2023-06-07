const request = require("supertest");
const app = require("../../index");

describe("GET /services", () => {
  it("should return all service categories", async () => {
    const res = await request(app).get("/services");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

describe("GET /services/:id", () => {
  it("should return a service category", async () => {
    const res = await request(app).get(
      "/services/0304eaf0-c317-4008-9bd4-5c33f6753a28"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.data.name).toBe("tax");
  });
});

describe("POST /services", () => {
  it("should create a new service category", async () => {
    const res = await request(app).post("/services").send({
      name: "usman",
      description: "this is usman service category",
    });
    expect(res.statusCode).toBe(200);
    expect(res.body.data.name).toBe("testing");
  });
});

describe("PUT /services/:id", () => {
  it("should update a service category", async () => {
    const res = await request(app)
      .put("/services/6ae54eac-ebb4-4c39-86e2-d5116665aace")
      .send({
        name: "taxess",
        description: "this is taxess service category",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Service category updated successfully");
  });
});

describe("DELETE /services/:id", () => {
  it("should delete a  service category", async () => {
    const res = await request(app).delete(
      "/services/b6b7d520-f771-4d6e-a397-fd30d96fca39"
    );
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Service category deleted successfully");
  });
});
