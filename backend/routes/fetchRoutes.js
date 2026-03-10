import { fetchData, fetchUser, approveUser } from "../controller/dataController.js";
import express from "express";
import { protect, admin } from "../middleware/middleware.js";

const route = express.Router();

route.get("/users", protect, fetchData);
route.get("/single-user", protect, fetchUser)

route.patch("users/approve/:id", protect, admin, approveUser);

export default route;
