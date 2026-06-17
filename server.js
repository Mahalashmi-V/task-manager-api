require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const connectDB = require("./config/db");

const taskRoutes = require("./routes/taskRoutes");

const errorHandler = require("./middleware/errorHandler");

const app = express();

connectDB();

app.use(cors());

app.use(express.json());


// Logging
app.use(morgan("dev"));


// Routes
app.use("/api/tasks", taskRoutes);


// Error Handler
app.use(errorHandler);

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}`
  );
});