const request = require("supertest");
const app = require("../../app");

// Before running the test cases, start the server
// beforeAll((done) => {
//   appServer = server.listen(8000, done);
// });

describe("GET /services", () => {
  it("should return all service categories", async () => {
    const res = await request(app).get("/services");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

const serviceId = "8aa2882e-78bd-4c88-9968-474bbc6a6529";
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
    .put("/services/8aa2882e-78bd-4c88-9968-474bbc6a6529")
    .send({
      name: "taxess",
      description: "this is taxess service category",
    });

  console.log("rambo", res.body);
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
// describe("POST /services", () => {
//   it("should create a new service category", async () => {
//     const res = await request(app).post("/services").send({
//       name: "tax",
//       description: "this is usman service category",
//     });

//     console.log(res.body);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.data.name).toBe("tax");
//   });
// });

// describe("PUT /services/:id", () => {
//   it("should update a service category", async () => {
//     const res = await request(app)
//       .put("/services/6ae54eac-ebb4-4c39-86e2-d5116665aace")
//       .send({
//         name: "taxess",
//         description: "this is taxess service category",
//       });
//     expect(res.statusCode).toBe(200);
//     expect(res.body.message).toBe("Service category updated successfully");
//   });
// });

// describe("DELETE /services/:id", () => {
//   it("should delete a  service category", async () => {
//     const res = await request(app).delete(
//       "/services/b6b7d520-f771-4d6e-a397-fd30d96fca39"
//     );
//     expect(res.statusCode).toBe(200);
//     expect(res.body.message).toBe("Service category deleted successfully");
//   });
// });

// afterAll((done) => {
//   server.close(done);
// });
