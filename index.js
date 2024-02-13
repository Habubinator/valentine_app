const express = require("express");
const path = require("path");
const app = express();

// Serve static files from the 'public' directory
app.use(express.static("public"));
app.use(express.static(path.resolve(__dirname, "static")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "static", "index.html"));
});

app.listen(3000, () => {
    console.log("Express server initialized");
});
