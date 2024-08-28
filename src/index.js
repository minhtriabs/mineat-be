import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import route from './routes/index.js';

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;
route(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
