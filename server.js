let express = require("express");
let bodyParser = require("body-parser")
let session = require("express-session")
const app = express();

//Moteur de templates
app.set("view engine", "ejs")

//Middlewares
app.use("/assets", express.static("public"))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
  secret: 'ekkeirioetiitjirtirjt',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))
app.use(require("./middlewares/flash"))
//Routes
app.get("/", (req, res) => {
  if (req.session.error) {
    res.locals.error = req.session.error
  }
  res.render("pages/index")
  console.log(req.session)
})
app.post("/", (req, res) => {
  if (req.body.message === undefined || req.body.message === "") {
    req.session.error = "Il y a une erreur"
    res.redirect("/")
  }
})

app.listen(8081)