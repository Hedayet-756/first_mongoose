import Task from "./task.model.js";
import { taskService } from "./task.service.js";

const createTask = async (req, res) => {
    try {
        const task = await taskService.createTaskIntoDB(req.body);
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
}

const getAllTasks = async (req, res) => {
    try {
        const tasks = await taskService.getAllTasksFromDB();
        res.status(200).json({
            success: true,
            message: "Tasks retrieved successfully",
            data: tasks,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Task retrieval failed",
            error: error,
        });
    }
}

const updateTask = async (req, res) => {
    try {
        const task = await taskService.updateTaskIntoDB(req.params.id, req.body);
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
}

const getTaskById = async (req, res) => {
    try {
        const task = await taskService.getTaskById(req.params.id);
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
}

export const taskController = {
    createTask,
    getAllTasks,
    updateTask,
    getTaskById,
};