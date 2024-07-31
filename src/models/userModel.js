import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  score: { type: Number, default: 0 },
  combo_duration_in_seconds: { type: Number, default: 0 },
  total_key_pressed: { type: Number, default: 0 },
  created_at: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;