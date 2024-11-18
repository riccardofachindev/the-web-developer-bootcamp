const express = require('express');
const app = express();
const path = require('path');
const redditData = require('./data.json');

app.use(express.static(path.join(__dirname, '/public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/random', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1;
    res.render('random', { numero: num });
})

app.get('/cats', (req, res) => {
    const cats = ['Betty', 'Mowgli', 'Rit', 'Jan', 'Billy'];
    res.render('cats', { cats });
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    const selectedSubreddit = redditData[subreddit];

    if (selectedSubreddit) {
        res.render('subreddit', { ...selectedSubreddit });
    } else {
        res.render('notfound', { subreddit });
    }
})

app.get('*', (req, res) => {
    res.render('notfound', { subreddit: '' });
})

app.listen(3000, () => console.log('LISTENING TO 3000'));