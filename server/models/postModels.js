import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema(
	{
		title: {
			type: String,
			required: true,
		},
		reps: {
			type: Number,
			required: true,
		},
		load: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

const someModel = mongoose.model("Post", postSchema);

export default someModel;
