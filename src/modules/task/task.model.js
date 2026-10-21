import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
        trim: true,
    },
    estimatedHours: {
        type: Number,
        default: 1,
    },
    isCompleted: {
        type: Boolean,
        default: false,
    },
    dueDate: {
        type: Date,
    },
    tags: {
        type: [String],
        default: [],
    },
    metaData: {
        source: {
            type: String,
        },
        version: {
            type: Number,
        },
    },
    budget: {
        type: mongoose.Schema.Types.Decimal128,
    },
    extraData: {
        type: Map,
        of: String,
    },
    priority: {
        type: String,
        enum: ['low', 'medium', 'high'],
        default: 'medium',
        required: true,
    },
},
    {
        timestamps: true,
        versionKey: false,
    },
);

const Task = mongoose.model('Tasks', taskSchema);

export default Task;