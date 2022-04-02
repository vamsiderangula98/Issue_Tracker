const express = require("express");
const port =8000;
const app = express();
const path = require("path");
const expressLayouts = require("express-ejs-layouts"); //for accesing all ejs files in single layout
const db = require("./config/mongoose");
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo");
var bodyParser = require("body-parser");

app.use(express.static("./assets"));

app.use(expressLayouts);
app.use(express.urlencoded());
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//setting up view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.set("views", "views");



//storing session in database
app.use(
  session({
    name: "employee-review-system",
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create(
      {
        mongoUrl:"mongodb+srv://vamsid98:vamsi@cluster0.abl5u.mongodb.net/Issue_Tracker_db" ,
        collectionName:'sessions',
        mongooseConnection: db,
        autoRemove: "disabled",
      },

      function (err) {
        console.log(err || "connect-mongodb setup ok");
      }
    ),
  })
);

// for authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
//routes
app.use("/", require("./routes")); 


// parse application/json
app.use(bodyParser.json());
app.use(express.json());


//listening to the server
app.listen(port, function (err) {
  if (err) {
    console.log("ERROR in connectiong to the server");
  }
  console.log(`Server is running on port ${port}`);
});
