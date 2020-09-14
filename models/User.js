
var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var UserSchema = new Schema({

    userID: {
        type: String,
        unique: true
    },

    favorites: [
        {
            type: Schema.Types.ObjectId,
            ref: "Cocktail"
        }
    ]
});


var User = mongoose.model("User", UserSchema);

module.exports = User;