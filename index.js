const express=require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const User = require("./models/user");
const Book=require("./models/book")

const app=express();
const port=3000;

//connexion à la base
mongoose.connect("mongodb://localhost:27017/Bib", {
   useNewUrlParser: true,
   useUnifiedTopology: true,
   useCreateIndex: true,
   useFindAndModify: true,
});
app.use(cors());
app.use(bodyParser.json());

//ajouter un user
app.post("/add", (req, res) => {
    //donnée venant du body de la request
    let data = req.body;
    //instancier un nouveau model et lui affecter les valeurs
    let user = new User({
        nom: data. nom,
        prenom: data.prenom,
        email: data.email,
        role: data.role,
        lstlivres:data.lstlivres,
        mdp: bcrypt.hashSync(data.mdp, bcrypt.genSaltSync(10)),
    });
    console.log(user);
    //Enregistrer le user dans la BD
    user
       .save()
       .then(() => res.status(201).send({ message: "user saved" }))
       .catch((e) => res.status(400).send(e));
 });






//Création du servveur
app.listen(port, () => {
    console.log("server started");
 });