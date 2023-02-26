import Post from "../models/postModels.js";

import mongoose from "mongoose";

import cloudinary from "cloudinary";

import fetch from "cross-fetch";

// Configuration
cloudinary.config({
	cloud_name: "dvj645xhp",
	api_key: "937249881231163",
	api_secret: "VTurV1QUGks4iqgBEC5HfW2hLn4",
});

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
	// name
	// description
	// color
	// location

	const { name, description, imageBase64, category, color, location } = req.body;

	if (imageBase64) {
		const result = await cloudinary.v2.uploader.unsigned_upload(imageBase64, "gtqttmac");
		const imageURL = result.secure_url;
	}

	const response = await fetch(
		`https://maps.googleapis.com/maps/api/place/details/json?placeid=${location}&key=${process.env.GOOGLE_MAPS_API_KEY}`
	);
	const data = await response.json();

	// console.log(data);
	// console.log(data && data.result.geometry.location);

	const lat = data && data.result.geometry.location.lat;
	const lng = data && data.result.geometry.location.lng;

	// console.log(lat, lng);

	let emptyFields = [];

	if (!name) {
		emptyFields.push("name");
	}

	if (!category) {
		emptyFields.push("description");
	}

	if (emptyFields.length > 0) {
		return res.status(400).json({ error: "Please fill in all the fields", emptyFields });
	}

	// add doc to db
	try {
		const post = await Post.create({ name, description, category, imageURL: imageBase64, color, location: [lat, lng] });
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
