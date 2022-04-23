import express from 'express';
import { MongoClient } from 'mongodb';
import cors from 'cors';
import dotenv from 'dotenv';

import router from './routes/ninjify.js';

const app = express();
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

dotenv.config();

app.use(express.json());
app.use(cors());
app.use('/', router);

const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

MongoClient.connect(MONGO_URL, options)
  .then(() => app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`)
  }))
  .catch((error) => console.log(error))


// const dbFunction = async (tlm) => {
//   // creates a new client
//   const client = new MongoClient(MONGO_URL, options);

//   // connect to the client
//   await client.connect();

//   // connect to the database
//   const db = client.db(tlm);
//   console.log("connected!");

//   // await db.collection("buzzWords").insertMany(
//   //   [{ buzzWord: "PHP" }, { buzzWord: "Angular" }, { buzzWord: "Python" }, { buzzWord: "Sass" }, { buzzWord: "Java" }]
//   // );

//   // await db.collection("ninjaNames").insertOne({ ninjaName: "Alphonse" })
//     await db.collection("buzzWords").insertOne({ buzzWord: "SQL" })


//   // close the connection to the database server
//   client.close();
//   console.log("disconnected!");
// };

// dbFunction();
