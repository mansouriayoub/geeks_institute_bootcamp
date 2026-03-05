import User from "../models/User.js";

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).json({ error: "Please provide all the required fields" });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        const user = await User.create({ name, email, password });
        res.status(201).json({ name: user.name, email: user.email, role: user.role });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id) {
            return res.status(400).json({ error: "Please provide the user id" });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        const userObj = user.toObject();
        delete userObj.password;
        res.status(200).json({ userObj });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export default { register, getUser };
