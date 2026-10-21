import express from 'express';
const app = express();
app.use(express.json());
import 'dotenv/config';
import Task from './modules/task/task.model.js';
import { taskRouter } from './modules/task/task.route.js';


app.use('/api/task', taskRouter);

//create task
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Wellcome to the mongoose server!' });
});

//all tasks
app.get("/api/task", async (req, res) => {
    try {
        const allTask = await Task.find();
        console.log("allTask", allTask);
        res.status(200).json({
            success: true,
            message: "Tasks retrieved successfully",
            data: allTask,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Task retrieval failed",
            error: error,
        });
    }
});

//single task
app.get("/api/task/:id", async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Task retrieved successfully",
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Task retrieval failed",
            error: error,
        });
    }
});

//update task
app.patch("/api/task/:id", async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
            returnDocument: 'after',
            runValidators: true,
        });
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "Task not found!",
            });
        }
        res.status(200).json({
            success: true,
            message: "Task updated successfully",
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Task update failed",
            error: error,
        });
    }
});

export default app;


