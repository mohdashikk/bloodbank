import express from "express";
import db from "../config/db.js";

const router = express.Router();

router.get("/test", async (req, res) => {
  try {
    const result = await db.query("SELECT NOW()");
    res.json({
      message: "Database connected ✅",
      data: result.rows
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;