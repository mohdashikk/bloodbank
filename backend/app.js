import express from "express";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import fetchRoute from './routes/fetchRoutes.js';
import createProfile from './routes/profileRoutes.js';

const app = express();

app.use(express.json());
app.use(cors());

//Test api

app.get("/api/test", (req, res) => {
  res.status(200).json({ message: "Working" });
});

//api's

app.use("/api/auth", authRoute);
app.use('/api/data', fetchRoute)
app.use('/api/user', createProfile)

export default app;
