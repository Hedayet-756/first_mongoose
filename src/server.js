import mongoose from "mongoose";
import app from "./app.js";
const port = 3000;


const main = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to the database');

        app.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    } catch (error) {
        console.error(error);
    }
};

main();
