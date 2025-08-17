import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './config/db.js';
import healthRoutes from './routes/health.route.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use('/', healthRoutes);


app.listen(3001, () => {
    connectDB;
    console.log('Server is running on http://localhost:3001');
})