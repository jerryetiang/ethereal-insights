import mongoose from 'mongoose';

const connect = async () => {
  try {
    const mongoUri = process.env.MONGO;

    if (!mongoUri) {
      throw new Error("MongoDB connection string is not defined.");
    }

    await mongoose.connect(mongoUri);
    console.log("Connected to MongoDB!");
    
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Connection failed:", error.message);
      console.error("Full error object:", error);
      throw new Error("Connection failed");
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("Connection failed");
    }
  }
};

export default connect;