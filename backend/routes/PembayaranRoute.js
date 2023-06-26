import express from "express";
import { updatePembayaran, updatepembayaranOwner } from "../controllers/Pembayaran.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// Rute untuk mengupdate pembayaran
router.patch("/pembayaran/:id", verifyUser, updatePembayaran);
router.patch("/pembayaranowner/:id", verifyUser, updatepembayaranOwner);

export default router;
