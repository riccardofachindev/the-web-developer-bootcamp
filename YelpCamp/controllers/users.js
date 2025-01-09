const User = require('../models/user')

module.exports.renderRegistrationForm = (req, res) => {
    res.render('users/register');
};

module.exports.createRegistration = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await new User({ username, email });
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, err => {
            if (err) return next();
            req.flash('success', 'User registered!');
            res.redirect('/campgrounds');
        });
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('/register');
    }
};

module.exports.renderLoginForm = (req, res) => {
    res.render('users/login');
};

module.exports.doLogin = (req, res) => {
    req.flash('success', 'welcome back');
    const redirectUrl = res.locals.returnTo || 'campgrounds';
    res.redirect(redirectUrl);
};

module.exports.doLogout = (req, res, next) => {
    req.logout(function (err) {
        if (err) {
            return next(err);
        }
        req.flash('success', 'Goodbye!');
        res.redirect('/campgrounds');
    });
};