var express = require("express");
var mongoose = require("mongoose");

var db = require("./models");

var PORT = process.env.PORT || 3001;

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/thetopshelfdb";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });


// When the server starts, create and save a new User document to the db
// The "unique" rule in the User model's schema will prevent duplicate users from being added to the server
// db.User.create({ name: "Ernest Hemingway" })
//   .then(function(dbUser) {
//     console.log(dbUser);
//   })
//   .catch(function(err) {
//     console.log(err.message);
//   });

// Routes

// Route for retrieving all Notes from the db

app.get("/")


// Route for saving a new Note to the db and associating it with a User
// app.post("/added", function (req, res) {
//     // Create a new Note in the db
//     db.Cocktail.create(req.body)
//         .then(function (dbCocktail) {
//             // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
//             // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
//             // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
//             return db.User.findOneAndUpdate({}, { $push: { favorites: dbCocktail._id } }, { new: true });
//         })
//         .then(function (dbUser) {
//             // If the User was updated successfully, send it back to the client
//             res.json(dbUser);
//         })
//         .catch(function (err) {
//             // If an error occurs, send it back to the client
//             res.json(err);
//         });
// });
app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
);

// Route to get all User's and populate them with their notes
app.post("/user", function (req, res) {
    var ID = req.body.userID
    if (!ID) {

    }
    db.User.findOne({ "userID": ID })
        // Specify that we want to populate the retrieved users with any associated notes
        .populate("favorites")
        .then(function (dbUser) {
            if (dbUser) {
                res.json(dbUser)
            } else {
                db.User.create(req.body)
                    .then(function (dbUser) {
                        // If saved successfully, send the the new User document to the client
                        res.json(dbUser);
                    })
            }
        });
});

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});