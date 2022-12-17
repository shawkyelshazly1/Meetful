module.exports = (app) => {
	// handle logoutRoute
	app.get("/auth/logout", async (req, res, next) => {
		req.logout(function (err) {
			if (err) {
				return next(err);
			}

			return res.status(200).json({ msg: "loggedOut" });
		});
	});
};
