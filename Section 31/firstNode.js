const { add, PI } = require('./myMath');
const cats = require('./Animals');

for (let i = 0; i < 10; i++) {
    console.log('node here we go!!')
}

console.log(add(5, 10));
console.log(PI);

console.log('required directory cats', cats.allCats);