import { PrismaClient } from "../../prisma/generated/main";
import request from "supertest";
import app from "../../app";
const prisma = new PrismaClient();

describe("Testing all bank endpoints", () => {
  let staffToken = "";
  let userToken = "";

  beforeAll(async () => {
    await prisma.bank.delete({
      where: {
        name: "test",
      },
    });

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
  });

  const data = {
    name: "test",
    code: "this is a test bank",
    url: "https://test.com",
    image: "https://test.com",
  };

  it("should create a new bank", async () => {
    const res = await request(app)
      .post("/banks")
      .set("Authorization", `Bearer ${staffToken}`)
      .send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Bank created successfully");
    expect(res.body.data.name).toBe("test");
  });

  it("should return all banks", async () => {
    const res = await request(app).get("/banks");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  const bankId = "bd8b1a56-d3a8-4716-a763-3ebe135715c7";
  it("should return a 200", async () => {
    const res = await request(app)
      .get(`/banks/${bankId}`)
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(200);
  });

  const w_bankId = "8aa2882e-78bd-4c88-9968-474bbc6a6545";
  it("should return a 400", async () => {
    const res = await request(app)
      .get(`/banks/${w_bankId}`)
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(400);
  });

  it("should update a bank", async () => {
    const res = await request(app)
      .put(`/banks/${bankId}`)
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        name: "Sterling Bank",
        code: "23333",
        url: "sterling.com",
        image: "cloudinary.com",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Bank updated successfully");
  });

  it("should return 400 ", async () => {
    const res = await request(app)
      .put("/banks/dbc5b4f4-5b81-46f6-a1b4-2bea6646a45c")
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        name: "test",
        code: "this is a test bank",
        url: "https://test.com",
        image: "https://test.com",
      });

    expect(res.statusCode).toBe(400);
  });
});
