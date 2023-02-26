import { useToast, Box, Progress, ButtonGroup, Button, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";

import { Form1, Form2, Form3 } from "./multistep/Post";

export default function multistep() {
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(33.33);
	const [coord, setCoord] = useState();

	const [dataPayload, setDataPayload] = useState({
		name: "Test name!",
		description: "Test description",
		category: "airpods",
		imageBase64: "",
		color: "#FFAF7A",
		location: "",
	});

	function sendThePost() {
		fetch(`http://localhost:3001/api/post`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(dataPayload),
		})
			.then((response) => response.json())
			.then(function (data) {
				console.log(data);

				toast({
					title: "Lost item posted.",
					// description: "We've created your account for you.",
					status: "success",
					duration: 3000,
					isClosable: true,
				});
				window.location.reload(true);
			})
			.catch(function (error) {
				console.error(error);
			});
	}

	return (
		<>
			<form
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					flexDirection: "column",
					paddingBottom: "16px",
					position: "relative",
				}}
			>
				{/* <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={800} p={6} m="10px auto" as="form"> */}

				<Progress w="100%" borderRadius={5} value={progress} mb="5%" mx="5%" isAnimated></Progress>

				{/* {step === 1 ? <Form1 setDataPayload={setDataPayload} /> : step === 2 ? <Form2 /> : <Form3 />} */}
				<Form1 setDataPayload={setDataPayload} />

				<ButtonGroup mt="5%" w="100%">
					<Flex w="100%" justifyContent="flex-end">
						{/* <Flex w="100%">
							<Button
								onClick={() => {
									setStep(step - 1);
									setProgress(progress - 33.33);
								}}
								isDisabled={step === 1}
								colorScheme="teal"
								variant="solid"
								w="7rem"
								size="sm"
								// mr="5%"
							>
								Back
							</Button>
							<Spacer />
							<Button
								w="7rem"
								isDisabled={step === 3}
								onClick={() => {
									setStep(step + 1);
									if (step === 3) {
										setProgress(100);
									} else {
										setProgress(progress + 33.33);
									}
								}}
								colorScheme="teal"
								variant="outline"
								style={{ display: step === 3 ? "none" : "inline-flex" }}
								size="sm"
							>
								Next
							</Button>
						</Flex> */}

						<Button
							w="7rem"
							colorScheme="primary"
							variant="solid"
							onClick={() => {
								// if (navigator.geolocation) {
								// 	navigator.geolocation.getCurrentPosition(function showPosition(position) {
								// 		console.log(position.coords.latitude, position.coords.longitude);
								// 	});
								// }
								console.log(dataPayload);
								sendThePost();
							}}
							size="sm"
						>
							Submit
						</Button>

						{/* {step === 3 ? (
							<Button
								w="7rem"
								colorScheme="red"
								variant="solid"
								onClick={() => {
									toast({
										title: "Account created.",
										description: "We've created your account for you.",
										status: "success",
										duration: 3000,
										isClosable: true,
									});
								}}
								size="sm"
							>
								Submit
							</Button>
						) : null} */}
					</Flex>
				</ButtonGroup>
				{/* </Box> */}
			</form>
		</>
	);
}
