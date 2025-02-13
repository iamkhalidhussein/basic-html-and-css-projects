import { Request, Response } from 'express';
import { connectDB } from './config/db';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

import UserRoutes from './routes/user-routes';

const app = express();
const port = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use('/users', UserRoutes);

app.get('/', (req: Request, res: Response) => {
    res.send('Thinking In React Serving...')
})

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch((error) => {
    console.error("Database connection failed:", error);
});
