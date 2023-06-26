import express from "express";
import { tambahGambarKontrakan } from "../controllers/GambarKontrakan.js";
import { verifyUser, ownerOnly } from "../middleware/AuthUser.js";
const router = express.Router();

// Route untuk menambahkan gambar kontrakan
router.post("/kontrakan/:id/gambar", verifyUser, ownerOnly, tambahGambarKontrakan);

export default router;
