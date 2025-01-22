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

    for (let i = 0; i < 400; i++) {
        let rand = Math.floor(Math.random() * 1000);
        let price = Math.floor(Math.random() * 20) + 10;
        const newCamp = new Campground({
            author: '673b1832032f223ab26d978c',
            geometry: { type: 'Point', coordinates: [cities[rand].longitude, cities[rand].latitude] },
            location: `${cities[rand].city}, ${cities[rand].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            images: [
                {
                    url: 'https://res.cloudinary.com/dhtqkzqij/image/upload/v1736442894/YelpCamp/ofvzfbbkpeywyc4eadnl.png',
                    filename: 'YelpCamp/ofvzfbbkpeywyc4eadnl',
                },
                {
                    url: 'https://res.cloudinary.com/dhtqkzqij/image/upload/v1736442894/YelpCamp/vlmvzzrcn4wznpppv9gk.png',
                    filename: 'YelpCamp/vlmvzzrcn4wznpppv9gk',
                }
            ],
            description: 'What a nice campground!',
            price
        })
        await newCamp.save();
    }
}

seedDB().then(() => mongoose.connection.close());