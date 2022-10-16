const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./connect");
const userRoutes = require("./routes/UserRoutes");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});