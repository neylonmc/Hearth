module.exports = function(req, res, next) {
    if (req.user) {
        return next();
    }

    return res.redirect("/login")
};

/////////////may need to change redirect route depending on route and file names///////////////