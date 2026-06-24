const express = require("express");
const router = express.Router();
const Task = require("../models/Task");

// Create Task
router.post("/create", async (req, res) => {
    try {
        const task = new Task({
            title: req.body.title,
            description: req.body.description || "",
            user: req.body.userId || null
        });

        await task.save();

        res.status(201).json({
            message: "Task created successfully",
            task
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        });
    }
});

// Get Tasks for a specific user
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
 
//delete tasks
router.delete("/:id", async (req, res) => {
    try {
        const deletedTask = await
        Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }
        res.json({
            message: "Task deleted successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

//update task
router.put("/:id", async (req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            {
                title: req.body.title,
                description: req.body.description,
                completed: req.body.completed
            },
            { new: true }
        );

        if (!updatedTask) {
            return res.status(404).json({
                message: "Task not found"
            });
        }

        res.json({
            message: "Task updated successfully",
            updatedTask
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;