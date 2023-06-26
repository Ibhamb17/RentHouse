import express from "express";
import { createCustomer, createOwner } from "../controllers/CustomerController.js";
import { verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.post("/customers",  createCustomer);
router.post("/owners",  createOwner);

export default router;