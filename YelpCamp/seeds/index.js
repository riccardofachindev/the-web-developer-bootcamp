const path = require('path');
const mongoose = require('mongoose');
const Campground = require('../models/campground')
const cities = require('./cities');
const { descriptors, places } = require('./seedHelpers');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => console.log('MONGO DB CONNECTION OPEN!'))
    .catch((err) => console.log('connection failed...', err));

const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});

    for (let i = 0; i < 50; i++) {
        let rand = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 20) + 10;
        const newCamp = new Campground({
            location: `${cities[rand].city}, ${cities[rand].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            image: 'https://source.unsplash.com/collection/483251',
            description: 'What a nice campground!',
            price
        })
        await newCamp.save();
    }
}

seedDB().then(() => mongoose.connection.close());