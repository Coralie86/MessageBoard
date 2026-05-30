const express = require("express");
const path = require("node:path");
const app = express();

// View set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Asset set up
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

const messages = [
  {
    id: 0,
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString()
  },
  {
    id: 1,
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString()
  }
];

app.get("/", (req, res) =>{
    res.render("index", {messages: messages});
});

app.get('/new', (req, res) => {
    res.render('form')
})

app.post('/new', (req,res) => {
    const arrLength = parseInt(messages.length);
    messages.push({id: arrLength, text: req.body.messageText, user: req.body.nameUser, added: new Date().toLocaleString()})
    res.redirect('/');
})

app.get('/:messageId', (req, res) => {
    const id = parseInt(req.params.messageId);
    res.render('detail', {message: messages.find( message => message.id === id)})
})



const PORT = 3000;
app.listen(PORT, (error) => {
  // This is important!
  // Without this, any startup errors will silently fail
  // instead of giving you a helpful error message.
  if (error) {
    throw error;
  }
  console.log(`My first Express app - listening on port ${PORT}!`);
});