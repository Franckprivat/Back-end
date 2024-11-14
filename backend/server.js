const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();
const port = 5000;

// connexion à la DB
connectDB();

const app = express();

app.get("/post", (req, res) => {
  res.json({ message: "Voici les données" });
});

app.use(express.static("public"));

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));

// Lancer le server
app.listen(port, () => console.log("le serveur a démarré au port " + port));
