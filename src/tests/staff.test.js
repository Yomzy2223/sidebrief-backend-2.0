const { PrismaClient } = require("@prisma/client");
const request = require("supertest");
const app = require("../../app");
const prisma = new PrismaClient();

describe("All staff endpoints test", () => {
  beforeAll(async () => {
    await prisma.staff.delete({
      where: {
        email: "test@gmail.com",
      },
    });
  });

  const data = {
    firstName: "Test",
    lastName: "Test",
    email: "test@gmail.com",
    password: "12345678",
    phone: "12341234",
  };

  it("should create a new staff", async () => {
    const res = await request(app).post("/staffs").send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Staff created successfully");
    expect(res.body.data.email).toBe("test@gmail.com");
  });

  const id = "328b852e-fd6b-45ce-9f70-2338537c5534";
  it("should return a 200", async () => {
    const res = await request(app).get(`/staffs/${id}`);
    expect(res.statusCode).toBe(200);
  });

  const w_id = "328b852e-fd6b-45ce-9f70-2338537c5535";
  it("should return a 400", async () => {
    const res = await request(app).get(`/staffs/${w_id}`);
    expect(res.statusCode).toBe(400);
  });

  it("should return a 200", async () => {
    const data = {
      email: "akinyemi@sidebrief.com",
      password: "12341234",
    };
    const res = await request(app).post("/staffs/login").send(data);
    expect(res.body.message).toBe("Login successfully");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.email).toBe("akinyemi@sidebrief.com");
  });

  it("should return a 400", async () => {
    const data = {
      email: "akinyemibamidele22@gmail.com",
      password: "Bamidele22",
    };
    const res = await request(app).post("/staffs/login").send(data);
    expect(res.statusCode).toBe(400);
  });
});