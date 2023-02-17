const dotenv = require("dotenv");
dotenv.config();
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

const employeesRouter = require("./routes/employees");
const departmentsRouter = require("./routes/departments");
const dataAPIRouter = require("./routes/dataAPI");

app.use("/employees", employeesRouter);
app.use("/departments", departmentsRouter);
app.use("/dataapi", dataAPIRouter);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(specs));

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

const PORT = process.env.HTTP_PORT || 4000;

app.listen(PORT, () => console.log("서버 정상 작동"));
