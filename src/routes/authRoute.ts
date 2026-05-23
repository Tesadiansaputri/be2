import express from "express";
const router = express.Router();

router.post("/login", (req, res) => {
  // Ingat, di useAuthStore Anda mengirim: body: JSON.stringify({ nim: email, password })
  // Jadi di backend, variabel kiriman email dibaca sebagai 'nim'
  const { nim, password } = req.body; 

  // SINKRONKAN: Samakan dengan akun yang ada di frontend Login.tsx Anda
  if (nim === "Tesadiansaputri@gmail.com" && password === "24090120") {
    return res.status(200).json({
      success: true,
      message: "Login Berhasil!",
      name: "Tesa Diansaputri" // Mengisi nama asli Anda untuk dikirim ke frontend
    });
  }

  return res.status(401).json({
    success: false,
    message: "Email atau Password salah!"
  });
});

export default router;