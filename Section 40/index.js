const express = require('express');
const app = express();
const morgan = require('morgan');
const AppError = require('./AppError');

app.use(morgan('dev'));

app.use((req, res, next) => {
    console.log('First middleware');
    return next();
})

app.use((req, res, next) => {
    console.log('Second middleware');
    return next();
})

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    return next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I LOVE DOGS');
    return next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chicken') {
        return next();
    }
    // res.send('Wrong password');
    // throw new Error('Error...');
    throw new AppError('password required', 401);
}

app.get('/', (req, res) => {
    console.log(`TIME: ${req.requestTime}`);
    res.send('HOME PAGE!');
})

app.get('/dogs', (req, res) => {
    res.send('WOOF WOOF');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('I am sad');
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.get('/admin', (req, res) => {
    throw new AppError('You are not admin', 403);
})

app.use((req, res) => {
    res.status(404).send('NOT FOUND...');
})

app.use((err, req, res, next) => {
    //console.log('**********ERROR**********');
    // res.status(500).send('WE GOT ERROR...');
    // next(err);
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000!');
})