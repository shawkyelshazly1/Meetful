const passport = require("passport");

module.exports = (app) => {
	// handle google login
	app.get("/auth/twitter", passport.authenticate("twitter"));

	// handle google login callback
	app.get(
		"/auth/twitter/callback",
		passport.authenticate("twitter", {
			failureRedirect: "http://localhost:3000/",
		}),
		function (req, res) {
			res.status(200).redirect("http://localhost:3000/");
		}
	);
};
