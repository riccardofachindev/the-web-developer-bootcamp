const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN');
    })
    .catch(() => {
        console.log('MONGO ERROR...');
        console.log(err);
    })

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: { type: Schema.Types.ObjectId, ref: 'User' }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const User = mongoose.model('User', userSchema);
const Tweet = mongoose.model('Tweet', tweetSchema);

const makeTweets = async () => {
    const user = new User({ username: 'chick', age: 33 });
    const tweet1 = new Tweet({ text: 'looool', likes: 5 });
    tweet1.user = user;
    user.save();
    tweet1.save();
}

// makeTweets();


const makeTweets2 = async () => {
    const user = await User.findOne({ name: 'Chick' });
    const tweet2 = new Tweet({ text: 'so boring', likes: 225 });
    tweet2.user = user;
    tweet2.save();
}

// makeTweets2();

const findTweet = async () => {
    const t = await Tweet.findOne({}).populate('user', 'username');
    console.log(t);
}

findTweet();