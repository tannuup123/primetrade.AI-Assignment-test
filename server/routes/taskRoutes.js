// taskRoutes.js

const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");
const Task = require("../models/Task");

// CREATE
router.post("/", protect, async (req, res) => {
  const task = await Task.create({
    ...req.body,
    user: req.user.id,
  });
  res.status(201).json(task);
});

// READ
router.get("/", protect, async (req, res) => {
  const tasks = await Task.find({ user: req.user.id });
  res.json(tasks);
});

// UPDATE
router.put("/:id", protect, async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user.id) {
    return res.status(404).json({ message: "Task not found" });
  }

  Object.assign(task, req.body);
  await task.save();
  res.json(task);
});

// DELETE
router.delete("/:id", protect, async (req, res) => {
  const task = await Task.findById(req.params.id);
  if (!task || task.user.toString() !== req.user.id) {
    return res.status(404).json({ message: "Task not found" });
  }

  await task.deleteOne();
  res.json({ message: "Task removed" });
});

module.exports = router;
