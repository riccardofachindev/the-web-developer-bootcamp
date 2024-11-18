const express = require('express');
const app = express();

/* app.use((req, res) => {
    console.log('REQUEST!')
    console.log(req);
    res.send('<h1>This is my webpage</h1>')
}) */

app.get('/', (req, res) => {
    res.send('Welcome home');
})

app.get('/cats', (req, res) => {
    res.send(`It's cats time`);
})

app.post('/cats', (req, res) => {
    res.send('We received your cat');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`Welcome to ${subreddit} subreddit!`);
})

app.get('/r/:subreddit/:subId', (req, res) => {
    const { subreddit, subId } = req.params;
    res.send(`Welcome to ${subreddit} subreddit! The ID is ${subId}`);
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found');
    }
    res.send(`<h1>Search results for ${q}</h1>`)
})

app.get('*', (req, res) => {
    res.send(`I don't know this one`);
})


app.listen(3000, () => {
    console.log('STARTED!');
});