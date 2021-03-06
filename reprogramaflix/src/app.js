const express = require("express");
const cors = require("cors");
const filmesRoutes = require("./routes/filmesRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/filmes", filmesRoutes);

module.exports = app;