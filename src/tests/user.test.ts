import { PrismaClient } from "@prisma/client";
import request from "supertest";
import app from "../../app";
const prisma = new PrismaClient();

describe("All user endpoints test", () => {
  beforeAll(async () => {
    await prisma.user.delete({
      where: {
        email: "test@gmail.com",
      },
    });
  });

  const data = {
    firstName: "Test",
    lastName: "Test",
    username: "Test",
    email: "test@gmail.com",
    password: "12345678",
    phone: "12341234",
    referral: "twitter",
  };

  it("should create a new user", async () => {
    const res = await request(app).post("/users").send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("User created successfully");
    expect(res.body.data.email).toBe("test@gmail.com");
  });

  it("should return all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  const id = "d666e364-58e9-4d51-a716-ce5551601ade";
  it("should return a 200", async () => {
    const res = await request(app).get(`/users/${id}`);
    expect(res.statusCode).toBe(200);
  });

  const w_id = "dbc5b4f4-5b81-46f6-a1b4-2bea6646a";
  it("should return a 400", async () => {
    const res = await request(app).get(`/users/${w_id}`);
    expect(res.statusCode).toBe(400);
  });

  it("should return a 200", async () => {
    const data = {
      email: "akinyemibamidele2@gmail.com",
      password: "Bamidele2",
    };
    const res = await request(app).post("/users/login").send(data);
    expect(res.body.message).toBe("Login successfully");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.email).toBe("akinyemibamidele2@gmail.com");
  });

  it("should return a 400", async () => {
    const data = {
      email: "akinyemibamidele22@gmail.com",
      password: "Bamidele22",
    };
    const res = await request(app).post("/users/login").send(data);
    expect(res.statusCode).toBe(400);
  });
});
