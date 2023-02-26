import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";
import swot from "swot-node";

import sgMail from "@sendgrid/mail";

import { verificationTemplate, verificationTemplateTextFallback } from "../email-templates/verification.js";

// sgMail.setApiKey("SG." + process.env.SENDGRID_API_KEY);
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const Schema = mongoose.Schema;

const userSchema = new Schema({
	email: {
		type: String,
		required: true,
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

// static signup method
userSchema.statics.signup = async function (email, password) {
	// validation
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	// email validation
	if (!validator.isEmail(email)) {
		throw Error("Email not valid");
	}

	const academic = await swot.isAcademic(email);

	if (!academic) {
		// throw Error("Email not academic!");
	}

	// const school = await swot.getSchoolName(email);

	// let name = "Unknown University or Institution";

	// if (school !== true || school !== false) name = school;

	// password validation (temporarily disabled)

	// if (!validator.isStrongPassword(password)) {
	// 	throw Error("Password not strong enough");
	// }

	const exists = await this.findOne({ email });

	if (exists) {
		throw Error("Email already in use");
	}

	const salt = await bcrypt.genSalt(10);
	const hash = await bcrypt.hash(password, salt);

	// email verification

	const emailArguments = {
		title: "Email Verification (title)",
		name: "Some Name!",
		topLogoURL: "http://localhost:3000/favicons/lifefind.svg", // 360x170
		bottomLogoURL: "http://localhost:3000/favicons/lifefind-white.svg", // 360x170

		verificationLink: "https://google.com/",
		unsubscribeLink: "https://google.com/",
	};

	sgMail
		.send({
			to: email, // Change to your recipient
			from: "email-verification@lifespring.tech", // Change to your verified sender
			// from: "jgoon2@illinois.edu", // Change to your verified sender
			subject: "Lifespring Verification Code",
			text: verificationTemplateTextFallback(emailArguments),
			html: verificationTemplate(emailArguments),
		})
		.then(() => {
			console.log("Email sent");
		})
		.catch((error) => {
			console.error(error);
		});

	const user = await this.create({ email, password: hash });

	return user;
};

// static login method
userSchema.statics.login = async function (email, password) {
	if (!email || !password) {
		throw Error("All fields must be filled");
	}

	const user = await this.findOne({ email });
	if (!user) {
		throw Error("Incorrect email");
	}

	const match = await bcrypt.compare(password, user.password);
	if (!match) {
		throw Error("Incorrect password");
	}

	return user;
};

const User = mongoose.model("User", userSchema);

export default User;
