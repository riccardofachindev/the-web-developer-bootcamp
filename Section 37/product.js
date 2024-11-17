const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION OPEN!');
    })
    .catch((err) => {
        console.log('ERROR', err);
    });

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Too low bish']
    },
    qty: {
        online: {
            type: Number,
            default: 1
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    categories: {
        type: [String]
    },
    size: {
        type: String,
        enum: ['S', 'L']
    },
    onSale: {
        type: Boolean,
        default: false
    }
})

productSchema.methods.greet = function () {
    console.log(`Hello from - ${this.name}`);
}

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}

productSchema.methods.addCategory = function (cat) {
    this.categories.push(cat);
    return this.save();
}

productSchema.statics.allOnSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 });
}

const Product = mongoose.model('Product', productSchema);

/* const bike = new Product({ name: 'Shirt2', price: 10, qty: { online: 5 }, size: 'S' });

bike.save().then(data => {
    console.log('ADDED!');
    console.log(data)
}).catch(err => {
    console.log('NOT ADDED..');
    console.log(err);
}) */



/* Product.findOneAndUpdate({ name: 'Toy' }, { price: 20 }, { new: true, runValidators: true })
    .then(data => {
        console.log('ADDED!');
        console.log(data)
    }).catch(err => {
        console.log('NOT ADDED..');
        console.log(err);
    }) */

/* const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Shirt2' });
    foundProduct.greet();
    await foundProduct.toggleOnSale();
    await foundProduct.addCategory('Clothes');
    console.log(foundProduct);
} */

// findProduct();

// Product.allOnSale().then(d => console.log(d)); 