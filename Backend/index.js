import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// CORS setup for both local + deployed frontend
const corsOptions = {
  origin: [
    "http://localhost:5173", // local frontend
    "https://job-portal-custom-frontend.onrender.com" // deployed frontend
  ],
  credentials: true, // allow cookies/session
};
app.use(cors(corsOptions));


// APIs
app.use("/api/user", userRoute);
app.use("/api/company", companyRoute);
app.use("/api/job", jobRoute);
app.use("/api/application", applicationRoute);

// Debug route to test deployment
app.get("/api/ping", (req, res) => {
  res.json({ message: "Backend is live ✅" });
});

// Start server after DB connection
const PORT = process.env.PORT || 5001;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`✅ Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("❌ Failed to connect to MongoDB", err);
    process.exit(1);
  });
