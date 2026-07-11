const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

const generateTokenAndSetCookie = (res, userId) => {
  const payload = {
    id: userId,
  };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "1d" });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.MODE_ENV === "production",
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //7 days
  });
  return token;
};

module.exports = generateTokenAndSetCookie;
