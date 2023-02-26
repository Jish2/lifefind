import React, { useState } from "react";
import {
	Progress,
	Box,
	ButtonGroup,
	Button,
	Heading,
	Flex,
	FormControl,
	GridItem,
	FormLabel,
	Input,
	Select,
	SimpleGrid,
	InputLeftAddon,
	InputGroup,
	Textarea,
	FormHelperText,
	InputRightElement,
} from "@chakra-ui/react";

import { ColorPicker } from "chakra-color-picker";

import { TbArrowDownCircle } from "react-icons/tb";

import { useToast } from "@chakra-ui/react";

import ImageUpload from "../ImageUpload";

const Form1 = () => {
	const [show, setShow] = React.useState(false);
	const handleClick = () => setShow(!show);
	const colorOptions = [
		"#F6D258",
		"#F0CFC7",
		"#7031A0",
		"#97D5E0",
		"#88B14C",
		"#EF562E",
		"#D13076",
		"#5587A2",
		"#5C7148",
		"#0C4B8A",
		"#ffffff",
		"#EFE8E2",
		"#BF9C86",
		"#5B4030",
		"#000000",
	];
	return (
		<>
			<Heading w="100%" textAlign={"center"} fontWeight="normal" mb="4%" size="md">
				Add an image
			</Heading>

			<ImageUpload />

			<FormControl mt={3}>
				<FormLabel size="sm" htmlFor="email" fontWeight={"normal"}>
					Name of Item
				</FormLabel>
				<Input size="sm" borderRadius={5} id="email" type="email" />
			</FormControl>
			<Flex width="100%" mt={3} justifyContent="flex-start">
				<FormControl mr="10px" width="100%">
					{/* <FormLabel htmlFor="first-name" fontWeight={"normal"}>
						Category
					</FormLabel> */}
					<Select placeholder="Category">
						<option value="wallet">Wallet</option>
						<option value="id">Identification Card</option>
						<option value="airpods">Airpods/Headphones</option>
						<option value="clothing">Clothing</option>
						<option value="technology">Technology</option>
						<option value="other">Other</option>
					</Select>
				</FormControl>

				<FormControl width="fit-content">
					{/* <FormLabel htmlFor="last-name" fontWeight={"normal"}>
						Color
					</FormLabel> */}
					{/* <Select placeholder="Color">
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</Select> */}
					<ColorPicker
						colors={colorOptions}
						onChange={(color) => {
							console.log(color);
						}}
					/>

					{/* <Input id="last-name" placeholder="First name" /> */}
				</FormControl>
			</Flex>
			<FormControl mt={3}>
				<FormLabel htmlFor="text" fontWeight={"normal"}>
					Description
				</FormLabel>
				<Textarea placeholder="Describe your item. Specify any notable features." />
			</FormControl>
		</>
	);
};

const Form2 = () => {
	return (
		<>
			<Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
				User Details
			</Heading>
			<FormControl as={GridItem} colSpan={[6, 3]}>
				<FormLabel
					htmlFor="country"
					fontSize="sm"
					fontWeight="md"
					color="gray.700"
					_dark={{
						color: "gray.50",
					}}
				>
					Country / Region
				</FormLabel>
				<Select
					id="country"
					name="country"
					autoComplete="country"
					placeholder="Select option"
					focusBorderColor="brand.400"
					shadow="sm"
					size="sm"
					w="full"
					rounded="md"
				>
					<option>United States</option>
					<option>Canada</option>
					<option>Mexico</option>
				</Select>
			</FormControl>

			<FormControl as={GridItem} colSpan={6}>
				<FormLabel
					htmlFor="street_address"
					fontSize="sm"
					fontWeight="md"
					color="gray.700"
					_dark={{
						color: "gray.50",
					}}
					mt="2%"
				>
					Street address
				</FormLabel>
				<Input
					type="text"
					name="street_address"
					id="street_address"
					autoComplete="street-address"
					focusBorderColor="brand.400"
					shadow="sm"
					size="sm"
					w="full"
					rounded="md"
				/>
			</FormControl>

			<FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
				<FormLabel
					htmlFor="city"
					fontSize="sm"
					fontWeight="md"
					color="gray.700"
					_dark={{
						color: "gray.50",
					}}
					mt="2%"
				>
					City
				</FormLabel>
				<Input
					type="text"
					name="city"
					id="city"
					autoComplete="city"
					focusBorderColor="brand.400"
					shadow="sm"
					size="sm"
					w="full"
					rounded="md"
				/>
			</FormControl>

			<FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
				<FormLabel
					htmlFor="state"
					fontSize="sm"
					fontWeight="md"
					color="gray.700"
					_dark={{
						color: "gray.50",
					}}
					mt="2%"
				>
					State / Province
				</FormLabel>
				<Input
					type="text"
					name="state"
					id="state"
					autoComplete="state"
					focusBorderColor="brand.400"
					shadow="sm"
					size="sm"
					w="full"
					rounded="md"
				/>
			</FormControl>

			<FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
				<FormLabel
					htmlFor="postal_code"
					fontSize="sm"
					fontWeight="md"
					color="gray.700"
					_dark={{
						color: "gray.50",
					}}
					mt="2%"
				>
					ZIP / Postal
				</FormLabel>
				<Input
					type="text"
					name="postal_code"
					id="postal_code"
					autoComplete="postal-code"
					focusBorderColor="brand.400"
					shadow="sm"
					size="sm"
					w="full"
					rounded="md"
				/>
			</FormControl>
		</>
	);
};

const Form3 = () => {
	return (
		<>
			<Heading w="100%" textAlign={"center"} fontWeight="normal">
				Social Handles
			</Heading>
			<SimpleGrid columns={1} spacing={6}>
				<FormControl as={GridItem} colSpan={[3, 2]}>
					<FormLabel
						fontSize="sm"
						fontWeight="md"
						color="gray.700"
						_dark={{
							color: "gray.50",
						}}
					>
						Website
					</FormLabel>
					<InputGroup size="sm">
						<InputLeftAddon
							bg="gray.50"
							_dark={{
								bg: "gray.800",
							}}
							color="gray.500"
							rounded="md"
						>
							http://
						</InputLeftAddon>
						<Input type="tel" placeholder="www.example.com" focusBorderColor="brand.400" rounded="md" />
					</InputGroup>
				</FormControl>

				<FormControl id="email" mt={1}>
					<FormLabel
						fontSize="sm"
						fontWeight="md"
						color="gray.700"
						_dark={{
							color: "gray.50",
						}}
					>
						About
					</FormLabel>
					<Textarea
						placeholder="you@example.com"
						rows={3}
						shadow="sm"
						focusBorderColor="brand.400"
						fontSize={{
							sm: "sm",
						}}
					/>
					<FormHelperText>Brief description for your profile. URLs are hyperlinked.</FormHelperText>
				</FormControl>
			</SimpleGrid>
		</>
	);
};

export { Form1, Form2, Form3 };
