const request = require("supertest");
const app = require("../../app");

// Before running the test cases, start the server
// beforeAll((done) => {
//   appServer = server.listen(8000, done);
// });

describe("GET /users", () => {
  it("should return all users", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(res.body.data.length).toBeGreaterThan(0);
  });
});

const id = "dbc5b4f4-5b81-46f6-a1b4-2bea6646a45c";
it("should return a 200", async () => {
  const res = await request(app).get(`/users/${id}`);
  expect(res.statusCode).toBe(200);
});

const w_id = "dbc5b4f4-5b81-46f6-a1b4-2bea6646a";
it("should return a 400", async () => {
  const res = await request(app).get(`/users/${w_id}`);
  expect(res.statusCode).toBe(400);
});

// it("should update a service category", async () => {
//   const res = await request(app)
//     .put("/services/dbc5b4f4-5b81-46f6-a1b4-2bea6646a45c")
//     .send({
//       name: "taxess",
//       description: "this is taxess service category",
//     });
//   expect(res.statusCode).toBe(200);
//   expect(res.body.message).toBe("Service category updated successfully");
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
