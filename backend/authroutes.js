const express = require("express");
const router = express.Router();

// Beispiel-Route für Authentifizierung
router.post("/login", (req, res) => {
    res.send("Login erfolgreich!");
});

module.exports = router;
