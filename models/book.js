const mongoose = require("mongoose");
const Book = mongoose.model("book", {
    titre: {
       type: String,
       required: true,
    },
    genre: {
       type: String,
       required: true,
    },
    auteur: {
       type: String,
       required: true,
       unique: true,
    },
    nbr: {
       type: Number,
       required: true,
    },
 });
 
 module.exports =Book;
