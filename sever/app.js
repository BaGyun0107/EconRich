require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const { swaggerUi, specs } = require("./swagger");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.HTTP_PORT || 4000;

app.listen(PORT, () => console.log("서버 정상 작동"));
