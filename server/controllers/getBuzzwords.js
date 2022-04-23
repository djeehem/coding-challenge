import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_URL = process.env.MONGO_URL;

const client = new MongoClient(MONGO_URL, options);

const getBuzzwords = async (req, res) => {
  try {
    await client.connect();
    console.log("Connected");
  
    const db = client.db("tlm");
    const buzzwords = await db.collection("buzzWords").find().toArray()
  
    buzzwords ?
      res.status(200).json({
        status: 200,
        data: buzzwords,
        message: "All buzzwords retrieved"
      }) :
      res.status(400).json({
        status: 400,
        message: 'Buzzwords could not be retrieved'
      })
  } catch (err) {
    return res.status(500).json({
      status: 500,
      message: "Server issue" });
  }
  finally {
    client.close();
    console.log('Disconnected')
  }
};

export { 
  getBuzzwords
};
