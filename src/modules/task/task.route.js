import { Router } from "express";
import { taskController } from "./task.controller.js";


const router = Router();

router.post("/", taskController.createTask);
router.get("/", taskController.getAllTasks);
router.patch("/:id", taskController.updateTask);
router.get("/:id", taskController.getTaskById);


export const taskRouter = router;