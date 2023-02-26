import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: false,
		},
		category: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: false,
		},
		imageURL: {
			type: String,
			required: false,
		},
		location: {
			type: [Number],
			required: true,
		},
	},
	{ timestamps: true }
);

const someModel = mongoose.model("Post", postSchema);

export default someModel;
