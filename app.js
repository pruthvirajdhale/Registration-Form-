const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('Connected to MongoDB');
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.post('/sign_up', function (req, res) {
    const { name, email, password, phone } = req.body;
    // Save user data to MongoDB
    // Example: create a User model and save the data
    // ...

    res.redirect('/signup_success.html');
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.listen(3000, function () {
    console.log('Server listening on port 3000');
});
