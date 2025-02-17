
import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const conn = await mongoose.connect(`mongodb://localhost:27017/chai`, {
            useNewUrlParser: true,
        });
        console.log(`mongoDB Connected: ${conn.connection.host}`);
        return conn;

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

export default connectDb;