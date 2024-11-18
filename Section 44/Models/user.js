const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN');
    })
    .catch(() => {
        console.log('MONGO ERROR...');
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            citiy: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: "Harry",
        last: "Potter"
    })
    u.addresses.push({
        street: 'Via Rago',
        city: 'Sanda',
        country: 'Italy'
    })
    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push({
        street: 'Via Roma',
        city: 'Mila',
        country: 'US'
    })
    const res = await user.save();
    console.log(res);
}

addAddress('66b3929aa0833b065c8eda65');