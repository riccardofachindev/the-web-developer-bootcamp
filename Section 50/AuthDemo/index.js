const express = require('express');
const app = express();
const User = require('./models/user')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');
const user = require('./models/user');
const session = require('express-session');

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('MONGO CONNECTION ERROR...', err);
    });

const requiredLogin = (req, res, next) => {
    if (!req.session.user_id) {
        return res.redirect('/login');
    }
    return next();
}

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(session({ secret: 'notagoodsecret' }));

app.get('/', (req, res) => {
    res.send('THIS IS HOME.')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { password, username } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User({
        username: username,
        password: hash
    })
    await user.save();
    req.session.user_id = user._id;
    res.redirect('/secret');
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findAndValidate(username, password);

    if (user) {
        isValid = await bcrypt.compare(password, user.password);
    }

    if (isValid) {
        req.session.user_id = user._id;
        res.redirect('/secret');
    } else {
        res.redirect('/login')
    }
})

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
})

app.get('/secret', requiredLogin, (req, res) => {
    // res.send('THIS IS A SECRET!!!ONLY FOR LOGGED IN')
    res.render('secret');
})

app.get('/topsecret', requiredLogin, (req, res) => {
    res.send('TOP SECRET!')
})

app.listen(3000, () => {
    console.log('Listening on 3000!')
})