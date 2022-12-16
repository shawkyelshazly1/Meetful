const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true },
		password: { type: String, trim: true, required: true },
		profileImage: {
			type: mongoose.Types.ObjectId,
			ref: "media",
			autopopulate: true,
		},
	},
	{ timestamps: true }
);

// auto populate plugin
userSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("User", userSchema);
