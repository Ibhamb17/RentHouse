import express from "express";
import {
  getKontrakans,
  getKontrakanById,
  getKontrakansByOwnerId,
  createKontrakan,
  updateKontrakan,
  deleteKontrakan,
  getKontrakanByIdForCustomer
} from "../controllers/Kontrakan.js";
import { verifyUser, adminOnly, ownerOnly } from "../middleware/AuthUser.js";

const router = express.Router();

// Middleware untuk verifikasi akses owner
const checkOwnerAccess = (req, res, next) => {
  const { role } = req.user; // Mendapatkan role dari user yang sedang login
  if (role === "owner") {
    next(); // Lanjut ke handler berikutnya jika owner
  } else {
    res.status(403).json({ message: "Access forbidden" });
  }
};

// Routes untuk kontrakan
router.get("/kontrakan", getKontrakans);
router.get("/kontrakan/:id", verifyUser, getKontrakanById);
router.get("/kontrakanowner", getKontrakansByOwnerId);
router.post("/kontrakan", verifyUser, createKontrakan);
router.patch("/kontrakan", verifyUser,  updateKontrakan);
router.patch("/kontrakan/:id", verifyUser,  updateKontrakan);
router.delete("/kontrakan/:id", verifyUser,  deleteKontrakan);
router.get("/kontrakan/customer/:id", verifyUser, getKontrakanByIdForCustomer);

export default router;
