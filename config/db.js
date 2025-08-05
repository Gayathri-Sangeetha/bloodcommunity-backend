// config/db.js

const mongoose = require('mongoose'); // Import mongoose to interact with MongoDB

// Function to connect to MongoDB
const connectDB = async () => {
  try {
    // Connect to MongoDB using the URL from the .env file
    await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.error('MongoDB Connection Failed:', error.message);
    process.exit(1); // Exit the application if DB connection fails
  }
};

module.exports = connectDB; // Export the function so we can use it in server.js
