const GoogleStrategy = require("passport-google-oauth2").Strategy,
	FacebookStrategy = require("passport-facebook").Strategy,
	{ UserService } = require("../services");

const userService = new UserService();

module.exports = function (passport) {
	// serialize user function
	passport.serializeUser(function (user, done) {
		done(null, user);
	});

	// deserialize user function
	passport.deserializeUser(function (user, done) {
		done(null, user);
	});

	// use passport google oAuth2 strategy
	passport.use(
		new GoogleStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
				callbackURL: "http://localhost:5000/auth/google/callback",
			},
			async function (accessToken, refreshToken, profile, cb) {
				const user = await userService.FindOrCreateUser({
					email: profile.email,
					firstName: profile.given_name,
					lastName: profile.family_name,
					social_user_id: profile.id,
				});
				cb(null, user);
			}
		)
	);

	// use passport facebook strategy
	passport.use(
		new FacebookStrategy(
			{
				clientID: process.env.FACEBOOK_CLIENT_ID,
				clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
				callbackURL: "http://localhost:5000/auth/facebook/callback",
				profileFields: ["id", "displayName", "photos", "email"],
			},
			async function (accessToken, refreshToken, profile, cb) {
				const user = await userService.FindOrCreateUser({
					email: profile.emails[0].value,
					firstName: profile.displayName[0],
					lastName: profile.displayName[1],
					social_user_id: profile.id,
				});
				cb(null, user);
			}
		)
	);
};
