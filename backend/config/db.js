const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false); // Option pour désactiver les avertissements strictQuery
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MONGO connecté");
    } catch (err) {
        console.error("Erreur de connexion à MongoDB :", err);
        process.exit(1);  // Quitte l'application en cas d'échec de la connexion
    }
};

module.exports = connectDB;
