const passport = require("passport");

module.exports = (app) => {
	// handle google login
	app.get(
		"/auth/google",
		passport.authenticate("google", { scope: ["openid", "email", "profile"] })
	);

	// handle google login callback
	app.get(
		"/auth/google/callback",
		passport.authenticate("google", {
			failureRedirect: "http://localhost:3000/",
		}),
		function (req, res) {
			res.status(200).redirect("http://localhost:3000/");
		}
	);
};
