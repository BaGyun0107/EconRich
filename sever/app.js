require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const { swaggerUi, specs } = require("./swagger");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ["http://localhost:4000"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  })
);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const employeesRouter = require("./routes/employees");

app.use("/", employeesRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

const PORT = process.env.HTTP_PORT || 4000;

app.listen(PORT, () => console.log("서버 정상 작동"));
