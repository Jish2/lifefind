import { useToast, Box, Progress, ButtonGroup, Button, Flex, Spacer } from "@chakra-ui/react";
import { useState } from "react";

import { Form1, Form2, Form3 } from "./multistep/Post";

export default function multistep() {
	const toast = useToast();
	const [step, setStep] = useState(1);
	const [progress, setProgress] = useState(33.33);
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

				{step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
				<ButtonGroup mt="5%" w="100%">
					<Flex w="100%" justifyContent="space-between">
						<Flex w="100%">
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
						</Flex>
						{/* submit button */}
						{step === 3 ? (
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
						) : null}
					</Flex>
				</ButtonGroup>
				{/* </Box> */}
			</form>
		</>
	);
}
