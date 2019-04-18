const express = require("express");
const MongoClient = require('mongodb').MongoClient;
const objectId = require("mongodb").ObjectID;
const bodyParser = require("body-parser");

const server = express()
const app = express();
const jsonParser = express.json();

const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });
let dbClient;

server.use(express.static(__dirname + '/client/build'));
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json());

app.use(express.static(__dirname + '/client/build'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoClient.connect((err, client) => {
    if(err) return console.log(err);
    dbClient = client;
    app.locals.collection = client.db("articlesdb").collection("articles");
    app.listen(8080, () => {
      console.log("listen 8080")
    });
    console.log("Connection")
})

server.get('/', (req, res) => {
    res.redirect(301, "/articles");
  });

  server.get('/articles', (req, res) => {
    res.sendFile(__dirname + "/client/build/index.html");
});

server.listen(8081, () => {
  console.log("listen 8081")
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content_type, Accept");
  next();
})

app.post("/article", jsonParser, (req, res) => {
  console.log("before insert");
  const collection = req.app.locals.collection;
  const title = req.body.title;
  const body = req.body.body;
  const article = {title: title, body: body, createdAt: new Date(), unpdatedAt: new Date()};
  console.log(article);
  collection.insertOne(article, (err, result) => {
    if(err) throw err;
    console.log("inserted");
    console.log(result);
    res.send(article);
  })
}); 

app.put("/articles/:id", (req, res) => {
  const collection = req.app.locals.collection;
  const id = new objectId(req.body.id);
  const title = req.body.title;
  const body = req.body.body;

  collection.findOneAndUpdate({_id: id}, 
    { $set: {title: title, body: body, unpdatedAt: new Date()}}, (err, result) => {
    if(err) throw err;
    console.log(result);
    const article = result.value;
    res.send(article)
  })
})


process.on("SIGINT", () => {
  dbClient.close();
  process.exit();
});