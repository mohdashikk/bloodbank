import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import fetchRoute from "./routes/fetchRoutes.js";
import createProfile from "./routes/profileRoutes.js";
import testRoute from "./routes/testRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
//Test api

// app.get("/api/test", (req, res) => {
//   res.status(200).json({ message: "Working" });
// });

//api's

app.use("/api/auth", authRoute);
app.use("/api/data", fetchRoute);
app.use("/api/user", createProfile);
app.use("/api", testRoute);
export default app;
