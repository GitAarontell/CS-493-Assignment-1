const express = require('express');
const path = require(`path`);
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/frontend/index.html'));
});

app.post('/submit', (req, res) => {
    name = req.body.name
    message = req.body.message
    res.send(`Hello ${name}. Thanks for your message!`);
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});