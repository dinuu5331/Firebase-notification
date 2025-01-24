// routes/notifications.js
const express = require("express");
// const admin = require("../firebaseAdmin.js");

const router = express.Router();

router.post("/send", async (req, res) => {
  const { token, title, body } = req.body;
  // console.log(req.body);
  const message = {
    notification: {
      title,
      body,
      // icon: "/download.png", // Path to your icon file
      // badge: "/download.png",
    },
    token,
  };

  try {
    await admin.messaging().send(message);
    console.log("Notification sent successfully!");
    res
      .status(200)
      .send({ success: true, message: "Notification sent successfully!" });
  } catch (err) {
    console.error("Error sending notification:", err);
    res.status(500).send("Failed to send notification.");
  }
});

module.exports = router;
