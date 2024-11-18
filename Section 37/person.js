const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('ERROR', err);
    });


const personSchema = mongoose.Schema({
    name: {
        type: String
    },
    surname: {
        type: String
    }
})



personSchema.virtual('fullName')
    .get(function () {
        return `${this.name} ${this.surname}`;
    })

personSchema.pre('save', function () {
    console.log('BEFORE SAVING');
})

const Person = mongoose.model('Person', personSchema);

