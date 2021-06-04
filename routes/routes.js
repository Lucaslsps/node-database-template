const express = require("express");
const router = express.Router();
const usersRoute = require("./UserRoute");

// Requisições e seus arquivos
router.use("/users", usersRoute);

module.exports = router;