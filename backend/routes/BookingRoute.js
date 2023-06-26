import express from "express";
import {
  getAllBookings,
  getBookingById,
  getBookingsByOwner,
  createBooking,
  updateBooking,
  deleteBooking
} from "../controllers/Booking.js";
import { ownerOnly, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

// Routes untuk booking
router.get("/bookings", verifyUser, getAllBookings);
router.get("/bookingsbyowner", verifyUser, getBookingsByOwner);
router.get("/bookings/:id", verifyUser, getBookingById);
router.post("/bookings", verifyUser, createBooking);
router.patch("/bookings/:id", verifyUser, ownerOnly, updateBooking);
router.delete("/bookings/:id", verifyUser, deleteBooking);

export default router;
