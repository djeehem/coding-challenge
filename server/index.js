import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import {buzzwords} from './data/buzzwords.js';
import BuzzNinja from './models/buzzNinja.js';

import router from './routes/ninjify.js'

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/ninjify', router);

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  })).catch((error) => console.log(error))

const initialCount = await BuzzNinja.count();
console.log(`count: ${initialCount}`);
if(initialCount == 0) {
    console.log(`inserting data: ${buzzwords}`);
    BuzzNinja.insertMany(buzzwords, (error, data) => {
        if (error) {
            console.log(`error: ${error}`);
        };    
    });        
}
const totalCount = await BuzzNinja.count();
console.log(`${totalCount} inserted document(s)`);
