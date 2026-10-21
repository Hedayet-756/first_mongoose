import { Router } from "express";
import Task from "./task.model.js";

const router = Router();

router.post("/", async (req, res) => {
    try {
        console.log(req.body);
        const task = await Task.create(req.body);
        console.log("task", task);
        res.status(201).json({
            success: true,
            message: "Task created successfully",
            data: task,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Task creation failed",
            error: error,
        });
    }
});


export const taskRouter = router;