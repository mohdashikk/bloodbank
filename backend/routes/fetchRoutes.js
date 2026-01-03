import fetchData from "../controller/dataController.js";
import express from "express";
import { protect, admin } from "../middleware/middleware.js";

const route = express.Router();

route.use("/users", protect, fetchData);

export default route;
