const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
  const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
app.get('/', (req, res) => {



  res.render('index', {
    messages: messages
  })

});

app.get('/new', (req, res) => {
    res.render('form');
});

app.post('/new', (req, res) => {
    const data = req.body;
    messages.push({ text: data.message, user: data.author, added: new Date() });
    res.redirect('/');
});

app.get('/message/:id', (req, res) => {
  const messageId = req.params.id;
  const targetMessage = messages[messageId];

  if (!targetMessage) {
    return res.status(404).send('Message not found');
  }

  res.render('detail', {
    msg: targetMessage
  });
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});