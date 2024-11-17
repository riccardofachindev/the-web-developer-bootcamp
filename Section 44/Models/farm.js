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

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Spring', 'Summer', 'Fall', 'Winter']
    }
})

const Product = mongoose.model('Product', productSchema);

/* Product.insertMany([
    { name: 'Melon', price: 5, season: 'Summer' },
    { name: 'Ananas', price: 2, season: 'Spring' },
    { name: 'Asparago', price: 3, season: 'Fall' }
]) */

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Farm = mongoose.model('Farm', farmSchema);

/* const makeFarm = async () => {
    const farm = new Farm({ name: 'Ric farm', city: 'Massagno' });
    const melon = await Product.findOne({ name: 'Melon' });
    farm.products.push(melon);
    await farm.save();
    console.log(farm);
}

makeFarm(); */

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Ric farm' });
    const ananas = await Product.findOne({ name: 'Ananas' });
    farm.products.push(ananas);
    farm.save();
    console.log(farm);
}

// addProduct(); 

Farm.findOne({ name: 'Ric farm' })
    .populate('products')
    .then(farm => console.log(farm));