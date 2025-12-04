const User = require('../models/userModel');

// Get user profile
exports.getProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id);
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user profile', error });
    }
};