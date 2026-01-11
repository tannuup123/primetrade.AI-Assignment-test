// // server.js 

// require("dotenv").config();
// const express = require("express");
// const cors = require("cors");
// const connectDB = require("./config/db");

// const authRoutes = require("./routes/authRoutes");
// const userRoutes = require("./routes/userRoutes");
// const taskRoutes = require("./routes/taskRoutes");

// const app = express();

// // CONNECT DATABASE
// connectDB();

// // ✅ UPDATED CORS CONFIG
// const allowedOrigins = [
//   "http://localhost:5173",
//   "http://localhost:3000",
//   "https://primetrade-ai-assignment-test.vercel.app",
//   "https://primetrade-ai-assignment-test-1emeeqs1u.vercel.app" // Add the one from your error message
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       // allow requests with no origin (like mobile apps or curl requests)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.indexOf(origin) === -1) {
//         const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
//         return callback(new Error(msg), false);
//       }
//       return callback(null, true);
//     },
//     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//     credentials: true,
//   })
// );

// // middlewares
// app.use(express.json());

// // routes
// app.use("/api/auth", authRoutes);
// app.use("/api/user", userRoutes);
// app.use("/api/tasks", taskRoutes);

// // test route
// app.get("/", (req, res) => {
//   res.send("PrimeTrade.ai Backend is running 🚀");
// });

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// }); this code is comment out just to test because there was a error while deploying my project 


require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");

const app = express();

// 1. Database Connection
connectDB();

// 2. Optimized CORS Configuration
const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:3000",
  "https://primetrade-ai-assignment-test.vercel.app",
  "https://primetrade-ai-assignment-test-1emeeqs1u.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      // allow requests with no origin (Postman, mobile apps)
      if (!origin) return callback(null, true);

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}));
app.options("*", cors());
// 4. Middlewares
app.use(express.json());

// 5. Routes
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const taskRoutes = require("./routes/taskRoutes");

app.get("/health", (req, res) => {
  res.status(200).send("Server is healthy");
})

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);
app.use("/api/tasks", taskRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("PrimeTrade.ai Backend is running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
