// Libraries
const express = require("express");
const cors = require("cors");
const PORT = 4000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: "*",
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", (req, res) => {
    res.json({message: `Welcome to Test1 Api Application.`});
});

app.get("/test2", (req, res) => {
    res.json({message: `Welcome to Test2 Api Application.`});
});

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});