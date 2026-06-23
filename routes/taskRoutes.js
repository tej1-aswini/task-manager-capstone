const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Create Task
router.post("/create", async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            description: req.body.description
        });

        await task.save();

        res.status(201).json({
            message: "Task created successfully",
            task
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

// Get All Tasks
router.get("/", async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;