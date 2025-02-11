const express = require('express');
const app = express();
const session = require('express-session');

const sessionOptions = {
    secret: 'thisisnotagoodsecret',
    resave: false,
    saveUninitialized: false
};

app.use(session(sessionOptions));

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1;
    } else {
        req.session.count = 1;
    }

    res.send(`YOU SAW THE PAGE ${req.session.count} TIMES`);
})

app.get('/register', (req, res) => {
    const { username = 'Anonymous' } = req.query;
    req.session.username = username;
    res.redirect('/greet');
})

app.get('/greet', (req, res) => {
    res.send(`Welcome back ${req.session.username}`);
})

app.listen(3000, () => {
    console.log('STARTED ON PORT 3000');
})