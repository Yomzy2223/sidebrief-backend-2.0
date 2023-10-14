import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../app";
const prisma = new PrismaClient();

describe("Testing all service endpoints", () => {
  let staffToken = "";
  let userToken = "";

  beforeAll(async () => {
    const loginData = {
      email: process.env.TEST_STAFF,
      password: process.env.TEST_STAFF_PASSWORD,
    };

    const StaffRes = await request(app).post("/staffs/login").send(loginData);
    expect(StaffRes.body.message).toBe("Login successfully");
    staffToken = StaffRes.body.data.token;

    const userLoginData = {
      email: process.env.TEST_USER,
      password: process.env.TEST_USER_PASSWORD,
    };

    const userResponse = await request(app)
      .post("/users/login")
      .send(userLoginData);
    expect(userResponse.body.message).toBe("Login successfully");
    userToken = userResponse.body.data.token;

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
    const res = await request(app)
      .post("/services")
      .set("Authorization", `Bearer ${staffToken}`)
      .send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Service category created successfully");
    expect(res.body.data.name).toBe("test");
  });

  it("should return all service categories", async () => {
    const res = await request(app).get("/services");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  const serviceId = "eac5be02-ddd6-42ef-ab48-19e36e2dd7d8";
  it("should return a 200", async () => {
    const res = await request(app)
      .get(`/services/${serviceId}`)
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(200);
  });

  const w_serviceId = "8aa2882e-78bd-4c88-9968-474bbc6a6545";
  it("should return a 400", async () => {
    const res = await request(app)
      .get(`/services/${w_serviceId}`)
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(400);
  });

  it("should update a service category", async () => {
    const res = await request(app)
      .put(`/services/${serviceId}`)
      .set("Authorization", `Bearer ${staffToken}`)
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
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        name: "taxess",
        description: "this is taxess service category",
      });

    expect(res.statusCode).toBe(400);
  });
});
