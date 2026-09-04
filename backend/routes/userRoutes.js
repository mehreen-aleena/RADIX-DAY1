const express = require("express");

const {
  getUsers,
  getUserById,
  createUser,
  deleteUser,
} = require("../controllers/userController");

const router = express.Router();

// Get all users
router.get("/", getUsers);

// Get user by ID
router.get("/:id", getUserById);

// Create user
router.post("/", createUser);

// Delete user
router.delete("/:id", deleteUser);

module.exports = router;