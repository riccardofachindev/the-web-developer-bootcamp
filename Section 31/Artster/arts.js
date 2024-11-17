const figlet = require('figlet');
const colors = require('colors');

figlet("1234567890!!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data.rainbow);
});