import jwt = require("jsonwebtoken");
import config = require("config");

export const auth = (req: any, res: any, next: any) => {
    // req.session = null;
    console.log(req.session);

    // Auth using session cookie
    const loggedIn = req.session.loggedIn;
    const token = req.session.token;
    console.log(req.session);

    // Check for token
    if (!token || !loggedIn)
        return res.status(401).json({
            success: false,
            message: "Not Authorized to Access. Please LOGIN!"
        });

    try {
        // Clear current token/cookie
        req.session.token = null;

        // Verify token
        const decoded = jwt.verify(token, config.get("jwtSecret"));

        // Reset cookie
        req.session.token = token;

        // Add user from payload
        req.user = decoded;
        next();
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: "Token is not valid" });
    }
};

export default auth;
