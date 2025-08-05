// models/Donor.js
// it is for database schems

const mongoose = require('mongoose');
//to import mongoose so we conncet with database

// Donor Schema
const donorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,          // Name is required
      trim: true               // Removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true,            // No duplicate emails
      lowercase: true          // Converts to lowercase before saving
    },
    phone: {
      type: String,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'] // Allowed values
    },
    location: {
      type: String,
      required: true
    },
    available: {
      type: Boolean,
      default: true            // By default, a donor is available
    }
  },
  {
    timestamps: true           // Automatically adds createdAt & updatedAt
  }
);

module.exports = mongoose.model('Donor', donorSchema);
