// server sessions.js controller

module.exports = (function() {

    return {
        login: function(req, res) {
            if(req.body.password !== "c0dingd0j0bellevue") {
                req.session.destroy(function(err) {
                    console.log("Incorrect password and session destroyed if it existed!");
                    res.redirect("/");
                });
            }
            else {
                //
                req.session.password = "logged in";
                console.log("req.cookies:", req.cookies);
                console.log("req.session:", req.session);
                res.redirect("/#dashboard");
            }
        },
        logout: function(req, res) {
            req.session.destroy(function(err) {
                console.log("Logged off and session destroyed if it existed!");
                res.redirect("/");
            });
        }

    };

})();