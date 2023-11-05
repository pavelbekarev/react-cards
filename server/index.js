const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const cors = require("cors");

const app = express();
const PORT = config.get("serverPort");
app.use(cors());
const setRouter = require("./routes/set.routes");
const cardRouter = require("./routes/card.routes");
app.use(express.json());
app.use("/api/set", setRouter);
app.use("/api/card", cardRouter);

app.get("/", (req, res) => {
    res.send("")
})

const start = async () => {
    try {
        mongoose.connect(config.get("DBUrl"));
        app.listen(PORT, () => {
            console.log("Server started on port: ", PORT);
        })
    }

    catch (e) { 

    }
}

start();