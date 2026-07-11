const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.route");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
// app.use(cors());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Blog Backend System Running smoothly... 🚀");
});

module.exports = app;
