import { PrismaClient } from "../../prisma/generated/client2";
import request from "supertest";
import app from "../../app";
const prisma = new PrismaClient();

describe("Testing all country endpoints", () => {
  let staffToken = "";
  let userToken = "";

  beforeAll(async () => {
    await prisma.country.delete({
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
    name: "Test",
    iso: "TEST",
    flagUrl: "test.com",
    code: "234",
    currency: "TEST",
  };

  it("should create a new country", async () => {
    const res = await request(app)
      .post("/countries")
      .set("Authorization", `Bearer ${staffToken}`)
      .send(data);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Country created successfully");
    expect(res.body.data.name).toBe("test");
  });

  it("should return all countries", async () => {
    const res = await request(app).get("/countries");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });

  const countryId = "bc134f97-12b5-4e2f-9f3c-9231807dfa26";
  it("should return a 200", async () => {
    const res = await request(app)
      .get(`/countries/${countryId}`)
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(200);
  });

  const w_countryId = "8aa2882e-78bd-4c88-9968-474bbc6a6545";
  it("should return a 400", async () => {
    const res = await request(app)
      .get(`/countries/${w_countryId}`)
      .set("Authorization", `Bearer ${userToken}`);
    expect(res.statusCode).toBe(400);
  });

  it("should update a country", async () => {
    const res = await request(app)
      .put(`/countries/${countryId}`)
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        name: "Kenya",
        iso: "KEN",
        flagUrl: "kenya.com",
        code: "233",
        currency: "KEN",
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Country updated successfully");
  });

  it("should return 400 ", async () => {
    const res = await request(app)
      .put("/countries/dbc5b4f4-5b81-46f6-a1b4-2bea6646a45c")
      .set("Authorization", `Bearer ${staffToken}`)
      .send({
        name: "Test",
        iso: "TEST",
        flagUrl: "test.com",
        code: "234",
        currency: "TEST",
      });

    expect(res.statusCode).toBe(400);
  });
});
