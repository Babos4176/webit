const express = require("express");
const router = express.Router();
const { poolPromise } = require("../db");

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const pool = await poolPromise;
    await pool.request()
      .input("Name", name)
      .input("Email", email)
      .input("Phone", phone)
      .input("Message", message)
      .query(`
        INSERT INTO ContactRequests (Name, Email, Phone, Message)
        VALUES (@Name, @Email, @Phone, @Message)
      `);

    res.status(200).json({ success: true, message: "Đã lưu vào cơ sở dữ liệu!" });
  } catch (err) {
    console.error("❌ Lỗi khi lưu dữ liệu:", err);
    res.status(500).json({ success: false, message: "Lỗi server khi lưu dữ liệu." });
  }
});

module.exports = router;