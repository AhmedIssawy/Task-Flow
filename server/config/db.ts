import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
    try {
        const mongoUri = process.env.MONGO_URI;
        
        if (!mongoUri) {
            throw new Error("MONGO_URI environment variable is not defined");
        }

        const conn = await mongoose.connect(mongoUri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error(`Error: ${errorMessage}`);
        process.exit(1);
    }
};

export default connectDB;