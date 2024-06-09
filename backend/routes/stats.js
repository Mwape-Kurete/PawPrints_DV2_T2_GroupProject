const express = require('express');
const PetListing = require('../models/PetListing');

const router = express.Router();

// Get statistics
router.get('/stats', async (req, res) => {
    try {
        // Count total active listings (approved and not adopted)
        const totalListings = await PetListing.countDocuments({ approved: true, adoptedStatus: false });
        // Count total adoptions
        const totalAdoptions = await PetListing.countDocuments({ adoptedStatus: true });
        // Count waiting approvals
        const waitingApprovals = await PetListing.countDocuments({ approved: false });

        // Group by animalType and count each type (approved and not adopted)
        const animalTypes = await PetListing.aggregate([
            { $match: { approved: true, adoptedStatus: false } },
            { $group: { _id: "$animalType", count: { $sum: 1 } } }
        ]);

        res.json({
            totalListings,
            totalAdoptions,
            waitingApprovals,
            animalTypes
        });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get adopted pets
router.get('/adopted', async (req, res) => {
    try {
        const adoptedPets = await PetListing.find({ adoptedStatus: true }).populate('userListed', 'name');
        res.json(adoptedPets);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
