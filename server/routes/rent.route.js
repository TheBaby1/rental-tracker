import express from 'express';
import { createRent } from "../controllers/rent.controller.js";

const router = express.Router();

router.post('/create-rent', createRent);

export default router;