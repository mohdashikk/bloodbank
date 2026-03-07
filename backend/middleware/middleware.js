import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const protect = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) return res.status(401).json({ message: "No token available" });

  try {
    const decode = jwt.verify(token, process.env.JWT); // ✅ verify, not decode
    req.user = decode;
    next();
  } catch (err) {
    console.log("Protect Middleware Error:", err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

const admin = (req, res, next) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({ message: "Admin only route" }); // ✅ use 403
    }
    next();
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Invalid token" });
  }
};

export { protect, admin };
