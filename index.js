import express from "express";

const app = express();

app.get("/", (req, res, next) => {
  res.json({
    message: "Hello from server. Doing Github actions",
  });
});

if (process.env.NODE_ENV !== "test") {
  app.listen(8000, () => {
    console.log("Server started on port 8000");
  });
}

export default app;
