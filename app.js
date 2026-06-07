const express = require("express");
const path = require("node:path");
const app = express();

const messageRouter = require('./routes/messageRouter');

// View set up
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Asset set up
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use(express.urlencoded({ extended: true }));

// const messages = [
//   {
//     id: 0,
//     text: "Hi there!",
//     user: "Amando",
//     added: new Date().toLocaleString()
//   },
//   {
//     id: 1,
//     text: "Hello World!",
//     user: "Charles",
//     added: new Date().toLocaleString()
//   }
// ];

app.use("/", messageRouter);


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