import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL, options);

const getNinjaNames = async (req, res) => {
  try {
    await client.connect();
    console.log("Connected");
  
    const db = client.db("tlm");
    const ninjaNames = await db.collection("ninjaNames").find().toArray()
  
    ninjaNames ?
      res.status(200).json({
        status: 200,
        data: ninjaNames,
        message: "All ninja names retrieved"
      }) :
      res.status(400).json({
        status: 400,
        message: 'Ninja names could not be retrieved'
      })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue" });
  }
  finally {
    client.close();
    console.log("Disconnected");
  }
};

export { 
  getNinjaNames
};
