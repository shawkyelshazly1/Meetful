const mongoose = require("mongoose"),
	consola = require("consola");

module.exports = () => {
	try {
		// start mongoose connection with uri based on NODE_ENV
		mongoose.connect(
			process.env.NODE_ENV === "development"
				? process.env.MONGODB_URI_DEV
				: process.env.MONGODB_URI_PROD,
			{ useNewUrlParser: true, useUnifiedTopology: true }
		);
		consola.success("💾 Pansos DB connected!");
	} catch (error) {
		consola.error("🪲 Pansos DB failed to connect!");
		consola.error("🪲🪲🪲🪲🪲🪲🪲🪲🪲🪲");
		consola.error(error);
	}
};
