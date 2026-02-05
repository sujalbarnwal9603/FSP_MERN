const User = require("../models/User.js")


const createUser = async (req, res) => {
    try {
        const { name, email, password, country, gender } = req.body;
        if (!name || !email || !password || !country || !gender) {
            return res.status(400).json({ message: "All fields are required" });
        }
        const user = new User({
            name,
            email,
            password,
            country,
            gender
        })
        await user.save();
        res.status(201).json({ message: "User created successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error creating user", error });
    }
}

const getUser = async (req, res) => {
    try {
        const user = await User.find();
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Error fetching user", error });
    }
}


const updateUser = async (req, res) => {
    try {
        const { name, email, password, country,
            gender } = req.body;
        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                name, email, password
                , country, gender
            },
            { new: true }
        );
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ message: "Error updating user", error });
    }
}
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
    }
}





module.exports = { createUser, getUser, getUserById, updateUser, deleteUser };