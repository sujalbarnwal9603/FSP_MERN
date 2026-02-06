const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const AuthRouter = require("./Routes/AuthRouter.js");
dotenv.config();

const app = express();
app.use(express.json());
app.use("/auth", AuthRouter);



const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mern_auth";
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }
    );
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

