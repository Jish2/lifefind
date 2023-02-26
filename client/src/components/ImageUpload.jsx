import { AspectRatio, Box, Container, Flex, forwardRef, Heading, Input, Stack, Text, Icon, Button } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

import { motion, useAnimation } from "framer-motion";
import ImageUploading from "react-images-uploading";
import { useState } from "react";

const first = {
	rest: {
		rotate: "-15deg",
		scale: 0.95,
		x: "-50%",
		filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		x: "-70%",
		scale: 1.1,
		rotate: "-20deg",
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const second = {
	rest: {
		rotate: "15deg",
		scale: 0.95,
		x: "50%",
		filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		x: "70%",
		scale: 1.1,
		rotate: "20deg",
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const third = {
	rest: {
		scale: 1.1,
		filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		scale: 1.3,
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const previewOfUpload = {
	rest: {
		scale: 1.4,
		// filter: "grayscale(80%)",
		transition: {
			duration: 0.5,
			type: "tween",
			ease: "easeIn",
		},
	},
	hover: {
		scale: 1.8,
		filter: "grayscale(0%)",
		transition: {
			duration: 0.4,
			type: "tween",
			ease: "easeOut",
		},
	},
};

const PreviewImage = forwardRef((props, ref) => {
	return (
		<Box
			bg="white"
			top="0"
			height="100%"
			width="100%"
			position="absolute"
			borderWidth="1px"
			borderStyle="solid"
			rounded="sm"
			borderColor="gray.400"
			as={motion.div}
			backgroundSize="cover"
			backgroundRepeat="no-repeat"
			backgroundPosition="center"
			backgroundImage={`url("https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg")`}
			{...props}
			ref={ref}
		/>
	);
});

const PreviewUploadedImage = forwardRef((props, ref) => {
	return (
		<>
			<Box
				bg="white"
				top="0"
				height="100%"
				width="100%"
				// style={{ aspectRatio: "1/1" }}
				position="absolute"
				borderWidth="1px"
				borderStyle="solid"
				rounded="sm"
				borderColor="gray.400"
				as={motion.div}
				backgroundSize="cover"
				backgroundRepeat="no-repeat"
				backgroundPosition="center"
				backgroundImage={`url("https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png")`}
				{...props}
				ref={ref}
			></Box>
		</>
	);
});

export default function ImageUpload() {
	const controls = useAnimation();
	const startAnimation = () => controls.start("hover");
	// const startAnimation = () => controls.start();
	const stopAnimation = () => controls.stop();

	const [images, setImages] = useState([]);

	const onChange = (imageList, addUpdateIndex) => {
		// data for submit
		console.log(imageList, addUpdateIndex);
		setImages(imageList);
	};

	return (
		<>
			<ImageUploading multiple value={images} onChange={onChange} maxNumber={1} dataURLKey="data_url" acceptType={["jpg", "png"]}>
				{({ imageList, onImageUpload, onImageRemoveAll, onImageUpdate, onImageRemove, isDragging, dragProps }) => (
					// write your building UI
					<>
						<Flex justify="center" align="center" flexDirection="column" gap={4}>
							<AspectRatio width="64" ratio={1} style={{ userSelect: "none", WebkitUserSelect: "none" }}>
								<Box
									borderColor="gray.300"
									borderStyle="dashed"
									borderWidth="2px"
									rounded="md"
									shadow="sm"
									role="group"
									transition="all 150ms ease-in-out"
									_hover={{
										shadow: "md",
									}}
									as={motion.div}
									initial="rest"
									animate="rest"
									whileHover="hover"
									onClick={onImageUpload}
								>
									<Box position="relative" height="100%" width="100%">
										<Box
											position="absolute"
											top="0"
											left="0"
											height="100%"
											width="100%"
											display="flex"
											flexDirection="column"
										>
											<Stack height="100%" width="100%" display="flex" alignItems="center" justify="center" gap="6">
												{images.length === 1 ? (
													<Box height="16" width="16" position="relative">
														<PreviewUploadedImage
															variants={previewOfUpload}
															backgroundImage={images[0]["data_url"]}
														/>
													</Box>
												) : (
													<Box height="16" width="12" position="relative">
														<PreviewImage
															variants={first}
															backgroundImage="url('https://image.shutterstock.com/image-photo/paella-traditional-classic-spanish-seafood-600w-1662253543.jpg')"
														/>
														<PreviewImage
															variants={second}
															backgroundImage="url('https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2628&q=80')"
														/>
														<PreviewImage
															variants={third}
															backgroundImage={`url("https://images.unsplash.com/photo-1563612116625-3012372fccce?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2480&q=80")`}
														/>
													</Box>
												)}

												<Stack pl="8" pr="8" textAlign="center" spacing="1" style={{ marginTop: "0" }}>
													<Heading fontSize="lg" color="gray.700" fontWeight="bold">
														Click to upload or take a photo
													</Heading>
													<Text fontWeight="light">or drop images here</Text>
												</Stack>
											</Stack>
										</Box>
										{/* <Input
											type="file"
											height="100%"
											width="100%"
											background="red"
											position="absolute"
											top="0"
											left="0"
											opacity="0"
											aria-hidden="true"
											accept="image/*"
											// onClick={startAnimation}
											onDragEnter={startAnimation}
											onDragLeave={stopAnimation}
										/> */}
									</Box>
								</Box>
							</AspectRatio>
							<Flex style={{ display: "flex", alignItems: "flex-start", justifyContent: "flex-end" }}>
								<Button
									variant="outline"
									colorScheme="red"
									size="sm"
									leftIcon={<DeleteIcon />}
									_hover={{ color: "red" }}
									onClick={onImageRemoveAll}
								>
									Remove Image
								</Button>
								{/* <Button
									variant="outline"
									size="sm"
									leftIcon={<EditIcon />}
									_hover={{ color: "red" }}
									onClick={onImageUpdate}
								>
									Edit Image
								</Button> */}

								{/* <div className="upload__image-wrapper">
									<button style={isDragging ? { color: "red" } : undefined} onClick={onImageUpload} {...dragProps}>
										Click or Drop here
									</button>
									&nbsp;
									<button onClick={onImageRemoveAll}>Remove all images</button>
									{imageList.map((image, index) => (
										<div key={index} className="image-item">
											<img src={image["data_url"]} alt="" width="100" />
											<div className="image-item__btn-wrapper">
												<button onClick={() => onImageUpdate(index)}>Update</button>
												<button onClick={() => onImageRemove(index)}>Remove</button>
											</div>
										</div>
									))}
								</div> */}
							</Flex>
						</Flex>
					</>
				)}
			</ImageUploading>
		</>
	);
}
