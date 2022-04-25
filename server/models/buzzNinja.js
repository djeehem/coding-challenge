import mongoose from 'mongoose';

const ninjaSchema = mongoose.Schema({
  buzzWord: String,
  ninjaName: String,  
  createdAt: {
    type: Date,
    default: new Date()
  }
});

const BuzzNinja = mongoose.model('BuzzNinja', ninjaSchema);

export default BuzzNinja;
