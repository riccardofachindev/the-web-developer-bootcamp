const franc = require('franc');
const langs = require('langs');
const colors = require('colors');

const text = process.argv[2];

const textCode = franc(text);

if (textCode === 'und') {
    console.log('Sorry not found'.red)
}

const languageFound = langs.where('3', textCode);

if (languageFound) {
    console.log(languageFound.name.green);
} else {
    console.log('Language non found aaaaah'.rainbow)
}