const express = require('express');
const app = express();
const path = require('path');
const { v4: uuid } = require('uuid');
const methodOverride = require('method-override');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

let comments = [
    {
        id: uuid(),
        username: 'Todd',
        comment: 'Nice one'
    },
    {
        id: uuid(),
        username: 'Mow',
        comment: 'I dont know..'
    },
    {
        id: uuid(),
        username: 'Pip',
        comment: 'Summer is magic'
    }
]

app.get('/', (req, res) => {
    res.render('home');
})

app.get('/comments', (req, res) => {
    res.render('comments/index', { comments });
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new');
})

app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render('comments/details', { comment });
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id);
    res.render(`comments/edit`, { comment })
})


app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newComment = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newComment;
    res.redirect('/comments');
})

app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    comments = comments.filter(c => c.id !== id);
    res.redirect('/comments');
})

app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username, comment, id: uuid() });
    res.redirect('/comments');
})

app.get('/ciao', (req, res) => {
    res.send('ciao');
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response');
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body;
    res.send(`Ok, these are the infos: ${qty} ${meat}`);
})

app.listen('3000', () => console.log('LISTENING ON PORT 3000'));