import mongoose from "mongoose";
import app from "./app.js";
import envConfig from "./config/index.js";


const main = async () => {
    try {
        await mongoose.connect(envConfig.DB_URI);
        console.log('Connected to the database');

        app.listen(envConfig.PORT, () => {
            console.log(`Example app listening at http://localhost:${envConfig.PORT}`);
        });
    } catch (error) {
        console.error(error);
    }
};

main();
