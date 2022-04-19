const express = require('express');

const mongoose = require("mongoose");

const app = express();

// Allow you to perform cross-domain Ajax requests in web applications.
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// DB config

const db = require("./config/keys").mongoURI;

// Connect to MongoDB

mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("hello!"));

// The actual port for the app in prodcution will come from the env. var. "PORT". For local dev., we just use 8080.
const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port ${port}`));
