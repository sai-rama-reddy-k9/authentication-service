const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const verifyToken = async (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized - no token provided.",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded)
      return res.status(401).json({ success: false, message: "Unauthorized." });
    req.userId = decoded.id;
    next();
  } catch (error) {
    console.log(`Error while verifying Token ${error.message}`);
    res.status(500).json({ success: false, message: "server error" });
  }
};

module.exports = { verifyToken };
