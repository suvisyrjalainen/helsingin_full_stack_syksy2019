const express = require('express')
const app = express();
const db = require('./queries')
const bodyParser = require('body-parser')
//app.listen(3000, () => console.log("kuuntelen"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("kuuntelen porttia " + port));

app.use(express.static("public"));

//Dummy-toteutuksessa käytettävä parseri
//app.use(express.json({limit: '1mb'}));

//PostgreSQL-toteutuksessa käytettävä bodyParset
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

//Dummy-toteutuksessa käytetty "tietokanta"
const arvostelut = [
    {
        "leffa": "Titanic",
        "arvostelu": "Klassikkokamaa",
        "arvostelija": "Suvi"
    },
    {
        "leffa": "Star Wars",
        "arvostelu": "Silmäkarkkia",
        "arvostelija": "Suvi 2"
    }
]

//Dummy-toteutuksessa käytetty rajapinta
app.get('/api/arvostelut', function (request, response) {
  response.send(arvostelut);
})

app.post('/api/arvostelu', function (request, response) {
  console.log("Leffan arvostelu");
  console.log(request.body);
  arvostelut.push(request.body);
  console.log(arvostelut);
  response.send(200);
})

//PostgreSQL-toteutuksessa käytetty rajapinta
app.get('/api/arvostelut/uusi', db.haeArvostelut)
app.post('/api/arvostelu/uusi', db.luoArvostelu)
