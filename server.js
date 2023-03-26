import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import foodRoutes from "./routes/foodRoute.js";
import cors from "cors";
import mongoose from "mongoose";


//configure env
dotenv.config();

//databse config
connectDB();

//object app
const app = express();

//middelwares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//false query
mongoose.set('strictQuery', false)

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/food", foodRoutes);

//GET - Frontpage
app.get("/", (req, res) => {
  res.send("<h4> welcome to SnapEats app </h4>");
});

//PORT
const PORT = process.env.PORT || 7000;

//listen run
app.listen(PORT, () => {
  console.log(
    `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
