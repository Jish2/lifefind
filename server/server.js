import dotenv from "dotenv";
dotenv.config();

import express from "express";

import mongoose from "mongoose";
mongoose.set("strictQuery", true);

import { router as postRoutes } from "./routes/posts.js";
import { router as userRoutes } from "./routes/user.js";

// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

// routes
app.use("/api/workouts", postRoutes);
app.use("/api/user", userRoutes);

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
