const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;
const VERSION = process.env.APP_VERSION || "2.0.0";
const BUILD_ID = process.env.BUILD_ID || "local";

app.get("/", (req, res) => {
  res.json({
    message: "DevOps CI/CD Project v2 is running!",
    version: VERSION,
    build: BUILD_ID,
    environment: process.env.NODE_ENV || "development",
    status: "healthy"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "devops-cicd-app"
  });
});

app.get("/version", (req, res) => {
  res.json({
    version: VERSION,
    build: BUILD_ID
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
  });
}

module.exports = app;