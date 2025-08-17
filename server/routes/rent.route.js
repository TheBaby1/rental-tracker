import express from 'express';
import { createRent } from "../controllers/rent.controller.js";
import { getAllRentals } from '../controllers/rent.controller.js';

const router = express.Router();

router.post('/create-rent', createRent);
router.get('/get-rentals', getAllRentals);

export default router;