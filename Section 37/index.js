const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('ERROR', err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
})

const Movie = mongoose.model('Movie', movieSchema);

// const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R' })

/* Movie.insertMany([
    { title: 'Star wars', year: 1946, score: 7.2, rating: 'R' },
    { title: 'Hunger', year: 2986, score: 5.2, rating: 'R' },
    { title: 'Lala', year: 1966, score: 6.2, rating: 'R' }
]).then(data => {
    console.log('INSERTED MANY!');
    console.log(data);
}) */