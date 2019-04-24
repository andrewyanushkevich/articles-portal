const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const ObjectId = require('mongodb').ObjectID;
const bodyParser = require('body-parser');


const server = express();
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json({ type: '*/*' }));
server.use(express.json({ type: '*/*' }));
server.use(cors());

const mongoClient = new MongoClient('mongodb://localhost:27017/', { useNewUrlParser: true });
let dbClient;

app.use(express.static(`${__dirname}/client/build`));
server.use(express.static(`${__dirname}/client/build`));

mongoClient.connect((err, client) => {
  if (err) return console.log(err);
  dbClient = client;
  server.locals.collection = client.db('articlesdb').collection('articles');
  server.listen(8080, () => {
    console.log('listen 8080');
  });
  console.log('Connection');
});

app.get('/', (req, res) => {
  res.redirect(301, '/articles');
});

app.get('/articles', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`);
});

app.listen(8081, () => {
  console.log('listen 8081');
});

server.post('/v1/article', (req, res) => {
  const { collection } = req.app.locals;
  const { title } = req.body;
  const { body } = req.body;
  const article = {
    title, body, createdAt: new Date(), unpdatedAt: new Date(),
  };

  collection.insertOne(article, (err, result) => {
    if (err) throw err;
    res.send(JSON.stringify(article));
  });
});

server.put('/v1/articles/:id', (req, res) => {
  const { collection } = req.app.locals;
  const id = new ObjectId(req.body.id);
  const { title } = req.body;
  const { body } = req.body;

  collection.findOneAndUpdate({ _id: req.params.id },
    { $set: { title, body, unpdatedAt: new Date() }, returnOriginal: false }, (err, result) => {
      if (err) throw err;
      const article = result.value;
      res.send(article);
    });
});

process.on('SIGINT', () => {
  dbClient.close();
  process.exit();
});
