import mongoose, { Schema } from 'mongoose';

// Define user schema
var userSchema = new Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  avg: [Number],
  healthHandles: {
  	type: Map,
  	of: [Number]
  },
  intervention: [String]
  
});

// Export Mongoose model
export default mongoose.model('user', userSchema);
