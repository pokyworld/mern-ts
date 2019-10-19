import express = require("express");
import mongoose = require("mongoose");
import compression = require("compression");
import session = require("cookie-session");
import hbs = require("express-handlebars");
import config = require("config");

import * as https from "https";
import * as path from "path";
import * as fs from "fs";

// Initialize server
const app = express();

// Middleware
app.use(compression());
app.use(express.json());

// Create SessionID with cookie session
const hour = 3600000;
app.use(
    session({
        name: "session",
        secret: config.get("cookieKey"),
        secure: true,
        httpOnly: true,
        domain: config.get("domain"),
        expires: new Date(Date.now() + 12 * hour),
        signed: true
    })
);

// DB Config
const db: any = config.get("mongoURI");

// Connect to MongoDb
mongoose
    .connect(db, {
        useFindAndModify: false,
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
    .then(() => console.log("Connected to MongoDb"))
    .catch((err: any) => console.log(err));

// Initiaize Handlebars
app.engine(
    "handlebars",
    hbs({
        extname: "handlebars",
        defaultLayout: "main",
        // helpers section to add support for passing in JS blocks
        helpers: {
            section: function(name: any, options: any): any {
                if (!this._sections) this._sections = {};
                this._sections[name] = options.fn(this);
                return null;
            }
        }
    })
);
app.set("views", "dist/views");
app.set("view engine", "handlebars");

// Routes
app.use("/", require("./routes/index"));

app.use("/api", require("./routes/api"));
app.use("/api/test", require("./routes/api/test"));
app.use("/api/users", require("./routes/api/users"));

// static files
app.use(express.static(path.join(__dirname, "../public")));

// Error Handling

// Handle 404
app.use((req: any, res: any, next: any) => {
    res.status(404).render("error", {
        title: "404: Page not found.",
        error: "This page cannot be found"
    });
});

// Handle 500
app.use((error: any, req: any, res: any, next: any) => {
    res.status(500).render("error", {
        title: "500: Internal Server Error",
        error
    });
});

// Configure server
const port = process.env.port || 9443;
const httpsOptions = {
    host: "pokyworld.local",
    cert: fs.readFileSync(
        path.join(
            "/Volumes/Transcend/Drive/Projects/Active/traversymedia/react-ts-loopback/ssl",
            "pokyworld.local.crt"
        )
    ),
    key: fs.readFileSync(
        path.join(
            "/Volumes/Transcend/Drive/Projects/Active/traversymedia/react-ts-loopback/ssl",
            "pokyworld.local.key"
        )
    )
};
https
    .createServer(httpsOptions, app)
    .listen(port, () =>
        console.log(`Server started. Listening on port ${port}`)
    );
