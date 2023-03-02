import { useState } from "react";

import {
	Text,
	useDisclosure,
	Container,
	Stack,
	Flex,
	Box,
	Heading,
	Button,
	Image,
	Icon,
	IconButton,
	createIcon,
	IconProps,
	useColorModeValue,
	Accordion,
	AccordionItem,
	AccordionButton,
	AccordionIcon,
	AccordionPanel,
	Link,
} from "@chakra-ui/react";
import { BottomNavigation } from "chakra-ui-bottom-navigation";
import Navbar from "../components/Navbar";
import Head from "next/head";

import { useRouter } from "next/router";

import TopbarStatic from "../components/TopbarStatic";
import CreatePostModal from "../components/CreatePostModal";

export default function Home() {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const router = useRouter();

	return (
		<>
			<div>
				<Head>
					<title>Lifefind</title>
				</Head>
				<TopbarStatic />
				<div style={{ width: "10px", height: "60px" }}></div>

				<Container maxW={"7xl"}>
					<Stack
						align={"center"}
						spacing={{ base: 8, md: 10 }}
						py={{ base: 14, md: 14 }}
						direction={{ base: "column", md: "row" }}
					>
						<Stack flex={1} spacing={{ base: 5, md: 10 }}>
							<Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
								<Text
									as={"span"}
									position={"relative"}
									// _after={{
									// 	content: "''",
									// 	width: "full",
									// 	height: "30%",
									// 	position: "absolute",
									// 	bottom: 1,
									// 	left: 0,
									// 	bg: "primary.500",
									// 	zIndex: -1,
									// }}
								>
									A Centralized
								</Text>
								<br />
								<Text as={"span"} color={"primary.500"}>
									Lost and Found
								</Text>
								<Text
									as={"span"}
									position={"relative"}
									// _after={{
									// 	content: "''",
									// 	width: "full",
									// 	height: "30%",
									// 	position: "absolute",
									// 	bottom: 1,
									// 	left: 0,
									// 	bg: "primary.500",
									// 	zIndex: -1,
									// }}
								>
									{" "}
									Platform for College Campuses
								</Text>
							</Heading>
							<Text color={"gray.500"}>Walk through our quick tutorial and learn how you can use Lifefind.</Text>
							<Stack spacing={{ base: 4, sm: 6 }} direction={{ base: "column", sm: "row" }}>
								<Button
									onClick={() => {
										router.push("/feed");
									}}
									rounded={"full"}
									size={"lg"}
									fontWeight={"normal"}
									px={6}
									colorScheme={"red"}
									bg={"primary.500"}
									_hover={{ bg: "primary.700" }}
								>
									Get started
								</Button>
								{/* <Button
									rounded={"full"}
									size={"lg"}
									fontWeight={"normal"}
									px={6}
									leftIcon={<PlayIcon h={4} w={4} color={"gray.300"} />}
								>
									How It Works
								</Button> */}
							</Stack>
						</Stack>
						<Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
							<Blob w={"150%"} h={"150%"} position={"absolute"} top={"-20%"} left={0} zIndex={-1} color="primary.300" />
							{/* <Box
								position={"relative"}
								height={"300px"}
								rounded={"2xl"}
								boxShadow={"2xl"}
								width={"full"}
								overflow={"hidden"}
							>
								<IconButton
									aria-label={"Play Button"}
									variant={"ghost"}
									_hover={{ bg: "transparent" }}
									icon={<PlayIcon w={12} h={12} />}
									size={"lg"}
									color={"white"}
									position={"absolute"}
									left={"50%"}
									top={"50%"}
									transform={"translateX(-50%) translateY(-50%)"}
								/>
								<Image
									alt={"Hero Image"}
									fit="contain"
									align={"center"}
									w={"100%"}
									h={"100%"}
									src={"https://i.ibb.co/XSk4NK3/image.png"}
								/>
							</Box> */}
							<Image
								alt={"Hero Image"}
								fit="contain"
								align={"center"}
								w={"100%"}
								h={"100%"}
								src="https://i.ibb.co/M1dQq7Q/fixed2.png"
							/>
						</Flex>
					</Stack>

					<Stack
						align={"center"}
						spacing={{ base: 8, md: 10 }}
						py={{ base: 20, md: 28 }}
						direction={{ base: "column", md: "row" }}
					>
						<Flex flex={1} justify={"center"} align={"center"} position={"relative"} w={"full"}>
							<Blob w={"150%"} h={"150%"} position={"absolute"} top={"-20%"} left={"-50%"} zIndex={-1} color="primary.300" />
							<Image
								alt={"Hero Image"}
								fit="contain"
								align={"center"}
								w={"100%"}
								h={"100%"}
								src="https://i.ibb.co/BPPYr63/image.png"
							/>
						</Flex>
						<Stack flex={1} spacing={{ base: 5, md: 10 }}>
							<Heading
								style={{ textAlign: "right" }}
								lineHeight={1.1}
								fontWeight={600}
								fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
							>
								<Text as={"span"} position={"relative"}>
									Made for{" "}
								</Text>
								<Text as={"span"} color={"primary.500"}>
									Students
								</Text>
								<br />
								<Text
									as={"span"}
									position={"relative"}
									// _after={{
									// 	content: "''",
									// 	width: "full",
									// 	height: "30%",
									// 	position: "absolute",
									// 	bottom: 1,
									// 	left: 0,
									// 	bg: "primary.500",
									// 	zIndex: -1,
									// }}
								>
									{" "}
									by{" "}
								</Text>
								<Text as={"span"} color={"primary.500"}>
									Students{" "}
								</Text>
							</Heading>
							{/* <Text color={"gray.500"}>Walk through our quick tutorial and learn how you can use Lifefind.</Text> */}
						</Stack>
					</Stack>

					{/* FAQ Section */}
					<Stack
						align={"center"}
						spacing={{ base: 8, md: 10 }}
						py={{ base: 20, md: 28 }}
						direction={{ base: "column", md: "column" }}
					>
						<Heading
							style={{ textAlign: "center" }}
							lineHeight={1.1}
							fontWeight={600}
							fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
						>
							<Text as={"span"} position={"relative"}>
								Frequently asked{" "}
							</Text>

							<br />

							<Text as={"span"} color={"primary.500"}>
								Questions{" "}
							</Text>
						</Heading>
						<Accordion allowToggle width={"100%"}>
							<AccordionItem>
								<h2>
									<AccordionButton _expanded={{ bg: "#F79858", color: "white" }}>
										<Box as="span" flex="1" textAlign="left">
											Was this a Hackathon Project?
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Yes. And it was absolutely robbed of the win. Check the{" "}
									<Link
										target="_blank"
										rel="noopener noreferrer"
										color="primary.500"
										href="https://devpost.com/software/lifefind"
									>
										Devpost
									</Link>{" "}
									out.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton _expanded={{ bg: "#F79858", color: "white" }}>
										<Box as="span" flex="1" textAlign="left">
											How do you prevent false ownership claims of found items?
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									While items that are found can be reported, their location and any other details about the item are
									privately stored. A team of moderators will manually cross reference products, and if the owner of the
									item has made a post, we will notify them.
								</AccordionPanel>
							</AccordionItem>

							<AccordionItem>
								<h2>
									<AccordionButton _expanded={{ bg: "#F79858", color: "white" }}>
										<Box as="span" flex="1" textAlign="left">
											Why are only students allowed to use this app?
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									The primary issue with lost and found apps and their success is the scope. These apps try to tackle
									spaces and demographics too large, and these unrealistic boundaries result in people finding their lost
									items very rarely. Resultantly, we decided to restrict lost and found spaces to verified students for a
									higher relative userbase and in turn a higher likelyhood of relocating items with their owner.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Stack>

					<div style={{ width: "100%", height: "300px" }}></div>
				</Container>

				<CreatePostModal onClose={onClose} isOpen={isOpen} />
				<Navbar onOpen={onOpen} />
			</div>
		</>
	);
}

export const Blob = (props) => {
	return (
		<Icon width={"100%"} viewBox="0 0 578 440" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
			<path
				fillRule="evenodd"
				clipRule="evenodd"
				d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
				fill="currentColor"
			/>
		</Icon>
	);
};
