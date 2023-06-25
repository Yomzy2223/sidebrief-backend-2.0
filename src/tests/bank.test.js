const { PrismaClient } = require("@prisma/client");
const request = require("supertest");
const app = require("../../app");
const prisma = new PrismaClient();

describe("Testing all bank endpoints", () => {
  let staffToken = "";
  let userToken = "";

  beforeAll(async () => {
    await prisma.bank.delete({
      where: {
        bankName: "test",
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
    bankName: "test",
    bankCode: "this is a test bank",
    bankUrl: "https://test.com",
    bankImage: "https://test.com",
  };

  it("should create a new bank", async () => {
    const res = await request(app)
      .post("/banks")
      .set("Authorization", `Bearer ${staffToken}`)
      .send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Bank created successfully");
    expect(res.body.data.bankName).toBe("test");
  });

  it("should return all bank", async () => {
    const res = await request(app).get("/banks");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  const bankId = "87c0f77d-1cbc-4583-8edf-355987d20871";
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
      .put("/banks/87c0f77d-1cbc-4583-8edf-355987d20871")
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        bankName: "Sterling Bank",
        bankCode: "23333",
        bankUrl: "sterling.com",
        bankImage: "cloudinary.com",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Bank updated successfully");
  });

  it("should return 400 ", async () => {
    const res = await request(app)
      .put("/banks/dbc5b4f4-5b81-46f6-a1b4-2bea6646a45c")
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        bankName: "test",
        bankCode: "this is a test bank",
        bankUrl: "https://test.com",
        bankImage: "https://test.com",
      });

    expect(res.statusCode).toBe(400);
  });
});
