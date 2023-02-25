import Post from "../models/postModels.js";

import mongoose from "mongoose";

// get all post
const getPosts = async (req, res) => {
	const posts = await Post.find({}).sort({ createdAt: -1 });

	res.status(200).json(posts);
};

// get a single post
const getSinglePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}

	const post = await Post.findById(id);

	if (!post) {
		return res.status(404).json({ error: "No such workout" });
	}

	res.status(200).json(post);
};

// create new post
const createPost = async (req, res) => {
	const { title, load, reps } = req.body;

	let emptyFields = [];

	if (!title) {
		emptyFields.push("title");
	}
	if (!load) {
		emptyFields.push("load");
	}
	if (!reps) {
		emptyFields.push("reps");
	}
	if (emptyFields.length > 0) {
		return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
	}

	// add doc to db
	try {
		const post = await Post.create({ title, load, reps });
		res.status(200).json(post);
	} catch (error) {
		res.status(400).json({ error: error.message });
	}
};

// delete a post
const deletePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}

	const post = await Post.findOneAndDelete({ _id: id });

	if (!post) {
		return res.status(400).json({ error: "No such workout" });
	}

	res.status(200).json(post);
};

// update a post
const updatePost = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: "No such workout" });
	}

	const post = await Post.findOneAndUpdate(
		{ _id: id },
		{
			...req.body,
		}
	);

	if (!post) {
		return res.status(400).json({ error: "No such workout" });
	}

	res.status(200).json(post);
};

export { getPosts, getSinglePost, createPost, deletePost, updatePost };
