const express = require("express");
const PetListing = require("../models/PetListing");
const User = require("../models/User");

const router = express.Router();

// Create a new pet listing
router.post("/add", async (req, res) => {
  const { name, animalType, age, breed, sex, colour, userListed } = req.body;

  try {
    const newPetListing = new PetListing({
      name,
      animalType,
      age,
      breed,
      sex,
      colour,
      userListed,
    });
    await newPetListing.save();

    // Update the user's petsListed array
    const user = await User.findById(userListed);
    user.petsListed.push(newPetListing.id);
    await user.save();

    res.json(newPetListing);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Get all unapproved pet listings
router.get("/unapproved", async (req, res) => {
  try {
    const listings = await PetListing.find({ approved: false });
    res.json(listings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Approve a pet listing
router.put("/approve/:id", async (req, res) => {
  try {
    const listing = await PetListing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    listing.approved = true;
    await listing.save();

    res.json({ message: "Listing approved" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Get all pet listings
router.get("/", async (req, res) => {
  try {
    const listings = await PetListing.find();
    res.json(listings);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Get pet listing by ID
router.get("/:id", async (req, res) => {
  try {
    const listing = await PetListing.findById(req.params.id)
      .populate("likedUsers", "name")
      .populate("comments.userId", "name");
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }
    res.json(listing);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Like a pet listing
router.post("/like/:id", async (req, res) => {
  const { userId } = req.body;
  try {
    const listing = await PetListing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    if (!listing.likedUsers.includes(userId)) {
      listing.likedUsers.push(userId);
      await listing.save();

      const user = await User.findById(userId);
      if (user && !user.petsLiked.includes(req.params.id)) {
        user.petsLiked.push(req.params.id);
        await user.save();
      }
    }

    res.json({ message: "Pet liked successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

// Comment on a pet listing
router.post("/comment/:id", async (req, res) => {
  const { userId, comment } = req.body;
  try {
    const listing = await PetListing.findById(req.params.id);
    if (!listing) {
      return res.status(404).json({ message: "Listing not found" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const commentObject = {
      userId: userId.toString(),
      name: user.name,
      comment: comment.toString(),
    };
    listing.comments.push(commentObject);
    await listing.save();

    res.json({ message: "Comment added successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
