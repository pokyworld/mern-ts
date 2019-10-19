const mongoose = require("mongoose");
import { IUser } from "../typescript/interfaces";

// Create Schema
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    avatar: {
        type: String
    },
    created: {
        type: Date,
        default: Date.now
    },
    loggedIn: {
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date,
        default: Date.now,
        required: false
    }
});

const User: IUser = mongoose.model("User", UserSchema);

module.exports = User;
