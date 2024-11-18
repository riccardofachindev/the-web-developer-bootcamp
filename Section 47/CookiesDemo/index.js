const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser('thisismysecret'));

app.get('/greet', (req, res) => {
    const { name = 'kat ' } = req.cookies.name;
    res.send(`Hey there ${name}`);
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'apple', { signed: true });
    res.send('SIGNED A COOKIE!')
})

app.get('/verifycookie', (req, res) => {
    res.send(req.signedCookies);
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'ric');
    res.cookie('animal', 'starfish');
    res.send('I SENT COOKIES');
})

app.listen(3000, (req, res) => {
    console.log('LISTENING 3000');
})