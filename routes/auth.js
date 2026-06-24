const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// REGISTER
router.post("/register", async (req, res) => {
    try {
    const { username, password } = req.body;

    const hashedPassword = await
    bcrypt.hash(password, 10);
    const user = new User({
        name: username,
        password: hashedPassword
    });

    await user.save();

    res.json({ message: "User registered" });
}   catch (err) {
    console.log(err);
    res.status(500).json({ message:
        err.message });
}

});

//login 
router.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ name: username });
    
    if (!user) {
        return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({ message: "Invalid password" });
    }

    res.json({ message: "Login successful" });
});

// middleware
const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: "No token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(401).json({ message: "Invalid token" });
    }
};

// protected route
router.get("/profile", authMiddleware, (req, res) => {
    res.json({
        message: "Protected route accessed",
        user: req.user
    });
});

module.exports = router;
