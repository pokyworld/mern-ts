import express = require("express");
const router = express.Router();

// Auth middleware
import auth from "../../middleware/auth";

// Validation
// import validateLoginInput from "../../validation/users/login.js";

// Load User model
const User = require("../../models/User");

// Routes

// @route   GET /
// @desc    Get blank home page
// @access  Public
router.get("/", (req: any, res: any, next: any) =>
    res.json({ msg: "Test API Works" })
);

// @route   GET api/test/public
// @desc    Test access to public list
// @access  Public
router.get("/public", (req: any, res: any) => {
    let errors: any[] = [];
    res.json({});
});

// @route   GET api/test/protected
// @desc    Test protected access using JWT
// @access  Protected
router.get("/protected", (req: any, res: any) => {
    let errors: any[] = [];
    res.json({});
});

// @route   GET api/test/token
// @desc    Test for JWT payload in session cookie
// @access  Protected
router.get("/token", auth, (req: any, res: any) => {
    let errors: any[] = [];
    res.json({ token: req.session.token, payload: req.user });
});

module.exports = router;
