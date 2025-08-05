

const express = require('express');
const router = express.Router();

// Test route
router.get('/', (req, res) => {
  res.send('Donor API is working!');
});

module.exports = router; // Export the router
