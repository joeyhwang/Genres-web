import express from'express';
import mongoose from  'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());

app.use('/user', userRoutes);


const CONNECTION_URL = process.env.CONNECTION_URL;

const PORT = process.env.PORT;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${ PORT }`)))
.catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);