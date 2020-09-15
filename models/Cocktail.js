var mongoose = require("mongoose");


var Schema = mongoose.Schema;

var CocktailSchema = new Schema({

    strDrink: {
        type: String,

    },
    strDrinkTumb: {
        type: String,
    },
    idDrink: {
        type: String,
    }
});


module.exports = mongoose.model('Cocktail', CocktailSchema);