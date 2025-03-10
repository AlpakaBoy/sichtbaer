const mongoose = require("mongoose");
require("dotenv").config(); // Falls du eine .env-Datei nutzt

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI || "mongodb+srv://benutzername:passwort@cluster0.mongodb.net/sichtbaer?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("🔥 MongoDB erfolgreich verbunden!");
    } catch (err) {
        console.error("❌ Fehler bei der Verbindung zu MongoDB:", err.message);
        process.exit(1); // Beendet den Prozess bei einem Fehler
    }
};

module.exports = connectDB;
