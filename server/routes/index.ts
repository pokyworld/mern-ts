import express = require("express");
const router = express.Router();

// @route   GET /
// @desc    Get blank home page
// @access  Public
router.get("/", (req: any, res: any, next: any) =>
    res.status(200).render("video", {
        // title: "Home Page",
        // msg: "Welcome to my Home Page"
    })
);

module.exports = router;
