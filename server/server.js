import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

// import bodyParser from "body-parser";

import { router as postRoutes } from "./routes/posts.js";
import { router as userRoutes } from "./routes/user.js";

// express app
const app = express();

// cors
app.use(
	cors({
		origin: "*",
	})
);

// middleware

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/post", postRoutes);
app.use("/api/user", userRoutes);

// import cloudinary from "cloudinary";
// cloudinary.v2;

// // Configuration
// cloudinary.config({
// 	cloud_name: "dvj645xhp",
// 	api_key: "937249881231163",
// 	api_secret: "VTurV1QUGks4iqgBEC5HfW2hLn4",
// });

// Upload

// const res = cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg", {
// 	public_id: "olympic_flag",
// });

// res.then((data) => {
// 	console.log(data);
// 	console.log(data.secure_url);
// }).catch((err) => {
// 	console.log(err);
// });

// connect to db
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		// listen for requests
		app.listen(process.env.PORT, () => {
			console.log("connected to db & listening on port", process.env.PORT);
			// console.log("API KEY:", process.env.SENDGRID_API_KEY);
		});
	})
	.catch((error) => {
		console.log(error);
	});
