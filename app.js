import express from 'express';
import mongoose from 'mongoose';
const app = express();
const port = 3000;


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

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Wellcome to the mongoose server!' });
});

const main = async () => {
    await mongoose.connect('mongodb+srv://first_mongoose:IzWqIzKJdid6hNJq@cluster0.xkqahqv.mongodb.net/?appName=Cluster0');
    console.log('Connected to the database');

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`);
    });
}

main();
