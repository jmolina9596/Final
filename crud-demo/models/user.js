const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    id: Number,
  name: String,
  email: String,
  Phone: Number,
  updated_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model("User", UserSchema);