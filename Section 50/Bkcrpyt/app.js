const bcrypt = require('bcrypt');

const hashPassword = async (pw) => {
    const salt = await bcrypt.genSalt(10);
    console.log(salt);

    const hash = await bcrypt.hash(pw, salt);
    console.log(hash);
}

const hashPasswordShort = async (pw) => {
    const hash = await bcrypt.hash(pw, 12);
    console.log(hash);
}

const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw);

    console.log(result ? 'Logged in!' : 'Wrong pw');
}

hashPasswordShort('monkey');
//login('monkey!', '$2b$10$9NRlKfEkQVRYGYQT/VVzK.zDFYFPjPxmyYKmUpemYBJUPETh7DGfq');