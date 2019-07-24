const showAbout = (req, res) => {
    if (!req.session.currentUser) {
    return res.redirect('/accounts/login');
    };
    
    res.render('about', {title: `We're gonna skate to one song and one song only`}, function(err, html){console.log(html)});
};

module.exports = {
    showAbout,
}