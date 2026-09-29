const request = require("supertest");
const app = require("./app");

describe("DevOps CI/CD Application", () => {
  test("GET / should return application information", async () => {
    const response = await request(app).get("/");

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("DevOps CI/CD Project v2 is running!");    expect(response.body.status).toBe("healthy");
  });

  test("GET /health should return UP", async () => {
    const response = await request(app).get("/health");

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe("UP");
  });

  test("GET /version should return version information", async () => {
    const response = await request(app).get("/version");

    expect(response.statusCode).toBe(200);
    expect(response.body.version).toBeDefined();
    expect(response.body.build).toBeDefined();
  });
});