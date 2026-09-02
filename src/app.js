const express = require("express");

const app = express();

app.get("/run", (req, res) => {
    const userInput = req.query.data;

    eval(userInput);

    res.send("Executed");
});

app.listen(3000);
