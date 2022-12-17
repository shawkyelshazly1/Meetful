const GoogleStrategy = require("passport-google-oauth2").Strategy,
	FacebookStrategy = require("passport-facebook").Strategy,
	TwitterStrategy = require("passport-twitter").Strategy,
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
					profileImage: profile.photos[0].value.split("=")[0],
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
				profileFields: ["id", "displayName", "email", "picture.width(400)"],
			},
			async function (accessToken, refreshToken, profile, cb) {
				const user = await userService.FindOrCreateUser({
					email: profile.emails[0].value,
					firstName: profile.displayName.split(" ")[0],
					lastName: profile.displayName.split(" ")[1],
					social_user_id: profile.id,
					profileImage: profile.photos[0].value,
				});
				cb(null, user);
			}
		)
	);

	// use passport twitter strategy
	passport.use(
		new TwitterStrategy(
			{
				consumerKey: process.env.TWITTER_CLIENT_ID,
				consumerSecret: process.env.TWITTER_CLIENT_SECRET,
				callbackURL: "http://localhost:5000/auth/twitter/callback",
				userProfileURL:
					"https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true",
			},
			async function (token, tokenSecret, profile, cb) {
				console.log(profile);
				const user = await userService.FindOrCreateUser({
					email: profile.emails[0].value,
					firstName: profile.displayName.split(" ")[0],
					lastName: profile.displayName.split(" ")[1],
					social_user_id: profile.id,
					profileImage: profile.photos[0].value.replace("_normal", ""),
				});
				cb(null, user);
			}
		)
	);
};
