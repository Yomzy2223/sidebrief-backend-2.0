const { PrismaClient } = require("@prisma/client");
const request = require("supertest");
const app = require("../../app");
const prisma = new PrismaClient();

describe("Testing all service endpoints", () => {
  beforeAll(async () => {
    await prisma.serviceCategory.delete({
      where: {
        name: "test",
      },
    });
  });

  const data = {
    name: "test",
    description: "this is a test service",
  };

  it("should create a new service", async () => {
    const res = await request(app).post("/services").send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Service category created successfully");
    expect(res.body.data.name).toBe("test");
  });

  it("should return all service categories", async () => {
    const res = await request(app).get("/services");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  const serviceId = "12ef5df3-b9a8-4742-bfd6-228042e0ddc5";
  it("should return a 200", async () => {
    const res = await request(app).get(`/services/${serviceId}`);
    expect(res.statusCode).toBe(200);
  });

  const w_serviceId = "8aa2882e-78bd-4c88-9968-474bbc6a6545";
  it("should return a 400", async () => {
    const res = await request(app).get(`/services/${w_serviceId}`);
    expect(res.statusCode).toBe(400);
  });

  it("should update a service category", async () => {
    const res = await request(app)
      .put("/services/12ef5df3-b9a8-4742-bfd6-228042e0ddc5")
      .send({
        name: "taxess",
        description: "this is taxess service category",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body).toBe("Service category updated successfully");
  });

  it("should return 400 ", async () => {
    const res = await request(app)
      .put("/services/dbc5b4f4-5b81-46f6-a1b4-2bea6646a45c")
      .send({
        name: "taxess",
        description: "this is taxess service category",
      });

    expect(res.statusCode).toBe(400);
  });
});
