const express = require('express');
const User = require('../models/User');
const PetListing = require('../models/PetListing');

const router = express.Router();

// Get user by ID
router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get listed pets by user ID
router.get('/pets/listed/:id', async (req, res) => {
    try {
        const pets = await PetListing.find({ userListed: req.params.id });
        res.json(pets);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get liked pets by user ID
router.get('/pets/liked/:id', async (req, res) => {
    try {
        const pets = await PetListing.find({ likedUsers: req.params.id });
        res.json(pets);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

// Get adopted pets by user ID
router.get('/pets/adopted/:id', async (req, res) => {
    try {
        const pets = await PetListing.find({ adoptedUser: req.params.id });
        res.json(pets);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
