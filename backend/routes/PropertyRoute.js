import express from "express";
import {
    getPropertys,
    getPropertybyId,
    createProperty,
    updateProperty,
    updatePropertybyId,
    deleteProperty
} from "../controllers/Property.js";
import { verifyUser, adminOnly, ownerOnly  } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/propertys',  getPropertys);
router.get('/propertys/:id', verifyUser,  getPropertybyId);
router.post('/propertys', verifyUser, createProperty);
router.patch('/propertys/:id', verifyUser, ownerOnly, updatePropertybyId);
router.patch('/propertys/:id', verifyUser, updatePropertybyId);
router.delete('/propertys/:id', verifyUser, deleteProperty);

export default router;