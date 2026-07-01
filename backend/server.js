const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();


// Connect to MongoDB
connectDB();


const app = express();


// Middlewares
app.use(cors());
app.use(express.json());


// Routes
const taskRoutes = require("./routes/taskRoutes");

app.use("/api/tasks", taskRoutes);


// Test API
app.get("/", (req, res) => {
    res.send("Task Tracker API is Running 🚀");
});


const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});