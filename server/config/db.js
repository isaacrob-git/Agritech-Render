const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/cosechadirecta";
        await mongoose.connect(uri);

        console.log("MongoDB conectado 🍃");
    } catch (error) {
        console.log("Error conexión MongoDB:", error.message);
    }
};

module.exports = connectDB;