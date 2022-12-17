const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
	{
		firstName: { type: String, required: true, trim: true },
		lastName: { type: String, required: true, trim: true },
		email: { type: String, required: true, trim: true },
		password: { type: String, trim: true },
		social_user_id: { type: String, trim: true },
		profileImage: {
			type: mongoose.Types.ObjectId,
			ref: "Media",
			autopopulate: true,
		},
	},
	{ timestamps: true }
);

// auto populate plugin
userSchema.plugin(require("mongoose-autopopulate"));

module.exports = mongoose.model("User", userSchema);
