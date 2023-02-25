import express from "express";
import {
	getPosts,
	getSinglePost,
	createPost,
	deletePost,
	updatePost,
} from "../controllers/postController.js";

import { requireAuth } from "../middleware/requireAuth.js";

const router = express.Router();

// require authentication
router.use(requireAuth);

// GET all posts
router.get("/", getPosts);

//GET a single post
router.get("/:id", getSinglePost);

// POST a new post
router.post("/", createPost);

// DELETE a post
router.delete("/:id", deletePost);

// UPDATE a workout
router.patch("/:id", updatePost);

export { router };
