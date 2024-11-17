const mongoose = require('mongoose');

const Product = require('./models/product.js');

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('MONGO CONNECTION ERROR...', err);
    });

/* const grape = new Product({
    name: 'grape',
    price: 1,
    category: 'fruit'
})

grape.save().then(data => console.log(data)).catch(e => console.log(e)); */

const seedProducts = [
    {
        name: 'cucumber',
        price: 0.5,
        category: 'vegetable'
    },
    {
        name: 'milk',
        price: 1.5,
        category: 'dairy'
    },
    {
        name: 'cheese',
        price: 3,
        category: 'dairy'
    },
    {
        name: 'tomato',
        price: 0.99,
        category: 'vegetable'
    }
]

Product.insertMany(seedProducts).then(data => console.log(data)).catch(e => console.log(e));