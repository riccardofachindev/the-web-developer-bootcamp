const express = require('express');
const app = express();
const sheltersRouters = require('./routes/shelters');
const dogsRouters = require('./routes/dogs');
const adminRouters = require('./routes/admin');

app.use('/shelters', sheltersRouters);
app.use('/dogs', dogsRouters);
app.use('/admin', adminRouters);

app.listen(3000, () => {
    console.log('app started on port 3000');
})