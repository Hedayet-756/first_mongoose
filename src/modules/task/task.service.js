import Task from "./task.model.js";

const createTaskIntoDB = async (payload) => {
    // create a new task
    const task = await Task.create(payload);
    // console.log("task", task);
}

const getAllTasksFromDB = async () => {
    // get all tasks
    const tasks = await Task.find();
    // console.log("tasks", tasks);
    return tasks;
}

const updateTaskIntoDB = async (id, payload) => {
    // update task
    const task = await Task.findByIdAndUpdate(id, payload, {
        returnDocument: 'after',
        runValidators: true,
    });
    if (!task) {
        throw new Error("Task not found!");
    }
    return task;
}

const getTaskById = async (id) => {
    // get task by id
    const task = await Task.findById(id);
    if (!task) {
        throw new Error("Task not found!");
    }
    return task;
}

export const taskService = {
    createTaskIntoDB,
    getAllTasksFromDB,
    updateTaskIntoDB,
    getTaskById,
};