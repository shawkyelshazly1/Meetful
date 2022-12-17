const passport = require("passport");

module.exports = (app) => {
	// handle google login
	app.get(
		"/auth/facebook",
		passport.authenticate("facebook", { scope: ["public_profile", "email"] })
	);

	// handle google login callback
	app.get(
		"/auth/facebook/callback",
		passport.authenticate("facebook", {
			failureRedirect: "http://localhost:3000/",
		}),
		function (req, res) {
			res.status(200).redirect("http://localhost:3000/");
		}
	);
};
