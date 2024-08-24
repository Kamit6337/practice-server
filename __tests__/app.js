// __tests__/app.test.js
import request from "supertest";
import app from "../index.js";
import http from "http";

describe("GET /api/hello", () => {
  let server;

  beforeAll((done) => {
    server = http.createServer(app).listen(8000, done);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should respond with a message "Hello from server"', async () => {
    const response = await request(server).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: "Hello from server" });
  });
});
