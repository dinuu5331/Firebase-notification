const express = require("express");
const notificationRoutes = require("./routes/notification.js");
const bodyParser = require("body-parser");
const logger = require("morgan");
const app = express();
const cors = require("cors");

// Middleware to parse JSON body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger("dev"));
app.use(cors());
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:3000", // Replace with your client's origin
  })
);

app.use("/api/notifications", notificationRoutes);
app.use("/", (req, res) => {
  res.send("Welcome to the Push Notification Server");
});
app.listen(5000, () => console.log("Server running on port 5000"));
