// Importação dos packages necessários
const express = require("express");
const router = express.Router();
const db = require('../../config/keys').MongoURI;
const mongoose = require('mongoose')
const UserSchema = require('../../config/models/UserSchema.js');
const createHash = require('../../services/utils')

// Conecta ao Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log('MongoDB conectado'))
  .catch(err => console.log(err));

// Lógica do GET
router.post("/create", async (req, res) => {
  const {email, password} = req.query
  const authenticationToken = createHash(email)

  UserSchema.create({email, password, authenticationToken}, (err)=>{
    console.log(err)
  })

  res.json(req.query);
});

module.exports = router;