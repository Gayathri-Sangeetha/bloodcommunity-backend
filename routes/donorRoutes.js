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

router.post('/', protect, createDonor); // <--- protect added
router.get('/', protect, getDonors);
router.get('/:id', protect, getDonorById);
router.put('/:id', protect, updateDonor);
router.delete('/:id', protect, deleteDonor);

module.exports = router;
