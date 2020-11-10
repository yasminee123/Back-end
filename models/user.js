const mongoose = require("mongoose");
const User = mongoose.model("user", {
    nom: {
       type: String,
       required: true,
    },
    prenom: {
       type: String,
       required: true,
    },
    email: {
       type: String,
       required: true,
       unique: true,
    },
    mdp: {
       type: String,
       required: true,
    },
    lstlivres:[{type:String}],

    role: {
       type: String,
       default: "client",
    },
 });
 
 module.exports = User;