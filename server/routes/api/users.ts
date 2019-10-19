import express = require("express");
import gravatar = require("gravatar");
import bcrypt = require("bcryptjs");
import jwt = require("jsonwebtoken");
import config = require("config");

import { IUser } from "../../typescript/interfaces";

const router = express.Router();

const hour = 3600000;

// Auth middleware
import auth from "../../middleware/auth";

// Validation
import validateLoginInput from "../../validation/users/login";
import validateRegisterInput from "../../validation/users/register";
import validateUpdateInput from "../../validation/users/update";

// Load User model
const User = require("../../models/User");

// Routes

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get("/test", (req: any, res: any, next: any) =>
    res.json({ msg: "Users API Works" })
);

// @route   GET api/users
// @desc    Gets all users
// @access  Public
router.get("/", (req: any, res: any, next: any) => {
    let errors: any[] = [];
    User.find()
        .populate("user", [
            "firstName",
            "lastName",
            "username",
            "email",
            "avatar"
        ])
        .sort({ lastName: 1 })
        .then((users: IUser[]) => {
            if (!users || users.length === 0) {
                errors.push({ nousers: "There are no users" });
                res.status(404).json({ errors });
            }
            res.json(users);
        })
        .catch((err: any) => {
            console.log(err);
            res.status(400).json({ success: false, msg: "an error occurred" });
        });
});

// @route   GET api/users/me
// @desc    Gets my user details using JWT payload in session cookie
// @access  Protected
router.get("/me", (req: any, res: any) => {
    let errors: any[] = [];
    res.json({ token: req.session.token, payload: req.user });
});

// @route   GET api/users/:_id
// @desc    Gets specified user by _id
// @access  Public
router.get("/:_id", (req: any, res: any, next: any) => {
    let errors: any[] = [];
    User.findById(req.params._id)
        .populate("user", [
            "firstName",
            "lastName",
            "username",
            "email",
            "avatar"
        ])
        .then((user: IUser) => {
            if (!user) {
                errors.push({ nouser: "User not found" });
                res.status(404).json({ errors });
            }
            res.json(user);
        })
        .catch((err: any) => {
            console.log(err);
            res.status(400).json({ success: false, msg: "an error occurred" });
        });
});

// @route   POST api/users/login
// @desc    Login user
// @access  Public
router.post("/login", (req: any, res: any) => {
    // Check Validation
    // const { errors, isValid } = validateLoginInput(req.body);
    // if (!isValid) return res.status(400).json({ errors });

    // const { username, email, password } = req.body;
    const errors: any[] = [];
    const { user, password } = req.body;
    const email = user.indexOf("@") >= 0 ? user : null;

    if (email) {
        // User supplied as Email
        User.findOne({ email })
            .select("+password")
            .then((user: IUser) => {
                if (!user) {
                    errors.push({ user: "User not found" });
                    return res.status(404).json({ errors });
                }
                // Check Password
                checkPassword(user, password, errors, req, res);
            })
            .catch((err: any) => console.log(err));
    } else {
        // User supplied as Username
        User.findOne({ user })
            .select("+password")
            .then((user: IUser) => {
                if (!user) {
                    errors.push({ user: "User not found" });
                    return res.status(404).json({ errors });
                }
                // Check Password
                checkPassword(user, password, errors, req, res);
            })
            .catch((err: any) => console.log(err));
    }
});

// @route   POST api/users/register
// @desc    Register: Adds New user
// @access  Public
router.post("/register", (req: any, res: any, next: any) => {
    // Check Validation
    const { errors, isValid } = validateRegisterInput(req.body);
    if (!isValid) return res.status(400).json({ errors });

    // 1st check for duplicate email
    User.findOne({ email: req.body.email })
        .then((user: IUser) => {
            if (user) {
                errors.push({ email: "This email already exists" });
                res.status(400).json({ success: false, errors });
            } else {
                // Next check for duplicate username
                User.findOne({ username: req.body.username })
                    .then((user: IUser) => {
                        if (user) {
                            errors.push({
                                username: "This username already exists"
                            });
                            res.status(400).json({ success: false, errors });
                        } else {
                            const avatar = gravatar.url(req.body.email, {
                                s: "200", // Size
                                r: "pg", // Rating
                                d: "mm" // Default
                            });

                            const newUser = new User({
                                firstName: req.body.firstName,
                                lastName: req.body.lastName,
                                username: req.body.username,
                                email: req.body.email,
                                password: bcrypt.hashSync(
                                    req.body.password,
                                    10
                                ),
                                avatar
                            });

                            newUser
                                .save()
                                .then((user: IUser) => {
                                    // Update loggedIn status at server
                                    user.loggedIn = true;
                                    user.lastLogin = Date.now();
                                    user.save((err: any, data: any) => {
                                        if (err) throw err;
                                    });

                                    // Create JWT
                                    const {
                                        _id,
                                        firstName,
                                        lastName,
                                        username,
                                        email
                                    } = user;
                                    const payload = {
                                        _id,
                                        firstName,
                                        lastName,
                                        username,
                                        email
                                    };
                                    jwt.sign(
                                        payload,
                                        config.get("jwtSecret"),
                                        // { expiresIn: 3600 },
                                        { expiresIn: 86400 },
                                        (err: any, token: string) => {
                                            if (err) throw err;
                                            req.session.loggedIn = true;
                                            req.session.token = token;
                                            res.json({
                                                loggedIn: true,
                                                token,
                                                user: {
                                                    ...payload,
                                                    avatar: user.avatar
                                                }
                                            });
                                        }
                                    );
                                })
                                .catch((err: any) => console.log(err));
                        }
                    })
                    .catch((err: any) => console.log(err));
            }
        })
        .catch((err: any) => console.log(err));
});

// @route   PUT api/users/:_id
// @desc    Updates specified user
// @access  Public
// router.put("/update/:_id", auth, (req: any, res: any) => {
//     // Validation
//     const { errors, isValid } = validateUpdateInput(req.body);
//     if (!isValid) return res.status(400).json({ errors });

//     User.findById(req.params._id)
//         .then((user: IUser) => {
//             if (req.body.firstName) user.firstName = req.body.firstName;
//             if (req.body.lastName) user.lastName = req.body.lastName;
//             if (req.body.username) user.username = req.body.username;
//             if (req.body.email) user.email = req.body.email;
//             if (req.body.password)
//                 user.password = bcrypt.hashSync(req.body.password, 10);

//             //TODO: Check Email and Username(s) are both unique

//             user.save((err: any, data: any) => {
//                 if (err) throw err;
//                 user.password = undefined; // ensure not returned
//                 res.json(user);
//             });
//         })
//         .catch((err: any) => {
//             console.log(err);
//             errors.push({ password: "Update Failed" });
//             return res.status(400).json({ errors });
//         });
// });

// @route   DELETE api/users/:_id
// @desc    Deletes user
// @access  Public
// router.delete("/delete/:_id", auth, (req: any, res: any) => {
//     User.findByIdAndDelete(req.params._id)
//         .then((user: IUser) =>
//             res.json({ success: true, message: "Deleted successfully!" })
//         )
//         .catch((err: any) =>
//             res.json({
//                 success: false,
//                 message: `An error occurred: ${err.message}`
//             })
//         );
// });

// @route   GET api/users/logout/:_id
// @desc    Logs User out
// @access  Protected, to avoid malicious logouts
router.get("/logout/:_id", auth, (req: any, res: any) => {
    if (req.params._id === req.user._id) {
        User.findById(req.params._id)
            .then((user: IUser) => {
                user.loggedIn = false;
                user.save((err: any, data: any) => {
                    if (err) throw err;
                });
                req.session.loggedIn = false;
                req.session.token = null;
                res.json({
                    success: true,
                    loggedIn: false,
                    message: "Logged out"
                });
            })
            .catch((err: any) => {
                console.log(err);
                res.status(400).json({
                    success: false,
                    message: "User not found"
                });
            });
    } else {
        res.status(400).json({
            success: false,
            loggedIn: req.session.loggedIn,
            message: "User not found"
        });
    }
});

const checkPassword = (
    userItem: IUser,
    password: string,
    errors: any[],
    req: any,
    res: any
) => {
    // Check Password
    bcrypt
        .compare(password, userItem.password)
        .then(isMatch => {
            if (isMatch) {
                // Update loggedIn status at server
                userItem.loggedIn = true;
                userItem.lastLogin = Date.now();
                userItem.save((err: any, data: any) => {
                    if (err) throw err;
                });

                // Create JWT Payload
                const { _id, firstName, lastName, username, email } = userItem;
                const payload = { _id, firstName, lastName, username, email };

                // Sign Token
                jwt.sign(
                    payload,
                    config.get("jwtSecret"),
                    // { expiresIn: 3600 },
                    { expiresIn: 86400 },
                    (err: any, token: string) => {
                        if (err) throw err;
                        req.session.loggedIn = true;
                        req.session.token = token;
                        res.json({
                            loggedIn: true,
                            token,
                            user: { ...payload, avatar: userItem.avatar }
                        });
                    }
                );
                // res.json({ isMatch: true });
            } else {
                errors.push({ password: "Password incorrect" });
                res.status(400).json({ errors });
            }
        })
        .catch((err: any) => {
            console.log(err);
            errors.push({ password: "Incorrect Credentials" });
            return res.status(400).json({ errors });
        });
};

module.exports = router;
