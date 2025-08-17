import express from 'express';
import { createRent } from "../controllers/rent.controller.js";
import { getAllRentals } from '../controllers/rent.controller.js';
import { deleteRentalById } from '../controllers/rent.controller.js';

const router = express.Router();

router.post('/create-rent', createRent);
router.get('/get-rentals', getAllRentals);
router.delete('/delete-rental/:id', deleteRentalById);

export default router;