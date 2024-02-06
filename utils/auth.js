// If not logged in, redirect to the login route

const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.redirect('/login');
    } else {
        next();
    }
};

// If not logged in, redirect to the login route
const apiAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        res.status(403).json({ msg: 'Access Denied! Login to complete the action!' });
    } else {
        next();
    }
};

// For pages that don't need login
const withoutAuth = (req, res, next) => {
    if (!req.session.logged_in) {
        next();
    } else {
        res.redirect('/');
    }
};

module.exports = { withAuth, apiAuth, withoutAuth };