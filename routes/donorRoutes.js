



const express = require('express');
const {
  createDonor,
  getDonors,
  getDonorById,
  updateDonor,
  deleteDonor,
} = require('../controller/donorController');
const protect = require('../middleware/authMiddleware'); 
const router = express.Router();

// @route   POST /api/donors
// @desc    Create a new donor
router.post('/', createDonor);

// @route   GET /api/donors
// @desc    Get all donors
router.get('/', getDonors);

// @route   GET /api/donors/:id
// @desc    Get a donor by ID
router.get('/:id', getDonorById);

// @route   PUT /api/donors/:id
// @desc    Update a donor
router.put('/:id', updateDonor);

// @route   DELETE /api/donors/:id
// @desc    Delete a donor
router.delete('/:id', deleteDonor);

module.exports = router;
