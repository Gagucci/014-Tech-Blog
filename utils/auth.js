// middleware that checks if the user is logged in
const withAuth = (req, res, next) => {
    // if the user is not logged in, redirect them to the login route
    if (!req.session.loggedIn) {
        res.redirect('/login');
    } else {
        // if the user is logged in, execute the route function that will allow them to view the page
        next();
    }
};

module.exports = withAuth;
