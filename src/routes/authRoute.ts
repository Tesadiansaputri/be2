import express from "express";

// PERBAIKAN UTAMA: Gunakan cara standar Express untuk membuat router
const router = express.Router();

// Route POST untuk proses login
router.post("/login", (req, res) => {
  const { nim, password } = req.body;

  if (nim === "24090120" && password === "admin123") {
    return res.status(200).json({
      success: true,
      message: "Login Berhasil!",
      name: "Administrator Invofest"
    });
  }

  return res.status(401).json({
    success: false,
    message: "NIM atau Password salah!"
  });
});

export default router;