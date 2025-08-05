
const Donor = require('../models/Donor'); // Import Donor model

// @desc    Create a new donor
// @route   POST /api/donors
// @access  Public
const createDonor = async (req, res) => {
  try {
    const { name, email, phone, bloodGroup, location, available } = req.body;

    // Check if donor already exists
    const existingDonor = await Donor.findOne({ email });
    if (existingDonor) {
      return res.status(400).json({ message: 'Donor with this email already exists' });
    }

    // Create new donor
    const donor = await Donor.create({
      name,
      email,
      phone,
      bloodGroup,
      location,
      available,
    });

    res.status(201).json(donor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all donors
// @route   GET /api/donors
// @access  Public
const getDonors = async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get single donor by ID
// @route   GET /api/donors/:id
// @access  Public
const getDonorById = async (req, res) => {
  try {
    const donor = await Donor.findById(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    res.status(200).json(donor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update donor
// @route   PUT /api/donors/:id
// @access  Public
const updateDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    res.status(200).json(donor);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete donor
// @route   DELETE /api/donors/:id
// @access  Public
const deleteDonor = async (req, res) => {
  try {
    const donor = await Donor.findByIdAndDelete(req.params.id);
    if (!donor) {
      return res.status(404).json({ message: 'Donor not found' });
    }
    res.status(200).json({ message: 'Donor deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createDonor,
  getDonors,
  getDonorById,
  updateDonor,
  deleteDonor,
};
