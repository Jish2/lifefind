import {
	Box,
	Flex,
	Text,
	IconButton,
	Button,
	Stack,
	Collapse,
	Icon,
	Link,
	Popover,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	useBreakpointValue,
	useDisclosure,
	Image,
	Input,
	Badge,
	Container,
	HStack,
	Tag,
	TagLabel,
	TagCloseButton,
	Avatar,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { IoMdLocate } from "react-icons/io";
import { useState } from "react";

export default function WithSubnavigation({ findMeClick }) {
	const { isOpen, onToggle } = useDisclosure();

	const [categories, setCategories] = useState([
		{ active: false, type: "All", image: "https://em-content.zobj.net/thumbs/120/apple/325/magnifying-glass-tilted-left_1f50d.png" },
		{ active: false, type: "Wallet", image: "https://i.ibb.co/FBvdDmy/12975495-removebg-preview.png" },
		{ active: false, type: "ID", image: "https://em-content.zobj.net/thumbs/120/apple/325/identification-card_1faaa.png" },
		{ active: false, type: "AirPods", image: "https://em-content.zobj.net/thumbs/120/apple/325/headphone_1f3a7.png" },
		{ active: false, type: "Clothing", image: "https://em-content.zobj.net/thumbs/120/apple/325/necktie_1f454.png" },
		{ active: false, type: "Technology", image: "https://em-content.zobj.net/thumbs/120/apple/325/mobile-phone_1f4f1.png" },
		{ active: false, type: "Other", image: "https://em-content.zobj.net/thumbs/160/apple/118/black-question-mark-ornament_2753.png" },
	]);

	const [activeCategories, setActiveCategories] = useState(Array(categories.length).fill(false));

	return (
		<Box position="fixed" top="0" zIndex={100}>
			<Flex flexDirection="column">
				<Flex
					bg={useColorModeValue("primary.500", "gray.800")}
					color={useColorModeValue("white", "white")}
					minH={"60px"}
					py={{ base: 2 }}
					px={{ base: 4 }}
					align={"center"}
					width="100vw"
				>
					<Flex flex={{ base: 1, md: "auto" }} ml={{ base: -2 }} display={{ base: "flex", md: "none" }}>
						<IconButton
							onClick={onToggle}
							icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
							aria-label={"Toggle Navigation"}
							variant="none"
						/>
					</Flex>
					<Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
						<Image
							type="svg"
							maxHeight={"35px"}
							boxSize="50px 10px"
							objectFit="contain"
							src="/favicons/lifefind-white.svg"
							alt="Lifefind"
						/>
						{/* <img src="/favicon/lifefind.svg" alt="React Logo" /> */}

						{/* <Text
						textAlign={useBreakpointValue({ base: "center", md: "left" })}
						fontFamily={"heading"}
						color={useColorModeValue("gray.800", "white")}
					></Text> */}

						<Flex display={{ base: "none", md: "flex" }} ml={10}>
							<DesktopNav />
						</Flex>
					</Flex>

					<Stack flex={{ base: 1, md: 0 }} justify={"flex-end"} direction={"row"} spacing={6}>
						<Icon
							as={IoMdLocate}
							h={6}
							w={6}
							onClick={() => {
								findMeClick();
								console.log("HERE");
							}}
						/>
						{/* <Button as={"a"} fontSize={"sm"} colorScheme="orange" fontWeight={400} variant="outline" href={"#"}>
							Sign In
						</Button> */}
						{/* <Button
							as={"a"}
							display={{ base: "none", md: "inline-flex" }}
							fontSize={"sm"}
							fontWeight={600}
							color={"white"}
							bg={"red.400"}
							href={"#"}
							_hover={{
								bg: "red.300",
							}}
						>
							Sign Up
						</Button> */}
					</Stack>
				</Flex>

				<div style={{ background: "var(--chakra-colors-primary-500)" }}>
					<div
						style={{ padding: "0px 16px 0px 16px", background: "var(--chakra-colors-primary-500)", width: "100vw" }}
						// bg={useColorModeValue("primary.500", "gray.800")}
						// borderBottom={1}
						// borderStyle={"solid"}
						// borderColor={useColorModeValue("whiteAlpha.200", "gray.900")}
						// width="100vw"
						// m={0}
					>
						<Input
							p={2}
							placeholder="Search for an item..."
							color="white"
							variant={"filled"}
							style={{ background: "white", borderRadius: "12px" }}
							_active={{ background: "white" }}
							_focus={{ background: "white" }}
							width={"100%"}
						/>
						<Flex pt={2} pb={4} gap={2} w="100%" flexDirection={"row"} overflowX="scroll">
							{categories.map(({ type, image }, index) => (
								// <Tag size={"lg"} key={index} borderRadius="full" variant="solid" colorScheme="green">
								// 	<TagLabel>{category}</TagLabel>
								// 	<TagCloseButton />
								// </Tag>
								<Tag
									key={index}
									size="lg"
									borderRadius="full"
									minWidth="max-content"
									style={{
										// backgroundColor: activeCategories[index] ? "grey" : "white",
										color: activeCategories[index] ? "black" : "white",

										backgroundColor: activeCategories[index] ? "white" : "#FFB98B",

										// border: activeCategories[index] ? "solid 2px #C4733D" : "solid 2px white",
										// opacity: "0",
										// boxShadow: activeCategories[index] ? "inset 0 0 10px 0px rgba(0, 0, 0, .8)" : "none",
										transition: "background-color .5s ease-out, color .2s ease-out",
									}}
									onClick={() => {
										setActiveCategories((prev) => {
											if (index === 0) {
												if (prev[0] === true) return Array(categories.length).fill(false);
												else return Array(categories.length).fill(true);
											} else {
												return prev.map((item, idx) => {
													if (index === idx) return !item;
													else if (index === 0) return false;
													else return item;
												});
											}
										});
									}}
								>
									<Image src={image} w={4} h={4} ml={-1} mr={2} />
									<TagLabel>{type}</TagLabel>
								</Tag>
							))}
						</Flex>
					</div>
				</div>

				<Collapse in={isOpen} animateOpacity>
					<MobileNav />
				</Collapse>
			</Flex>
		</Box>
	);
}

const DesktopNav = () => {
	const linkColor = useColorModeValue("gray.600", "gray.200");
	const linkHoverColor = useColorModeValue("gray.800", "white");
	const popoverContentBgColor = useColorModeValue("white", "gray.800");

	return (
		<Stack direction={"row"} spacing={4}>
			{NAV_ITEMS.map((navItem) => (
				<Box key={navItem.label}>
					<Popover trigger={"hover"} placement={"bottom-start"}>
						<PopoverTrigger>
							<Link
								p={2}
								href={navItem.href ?? "#"}
								fontSize={"sm"}
								fontWeight={500}
								color={linkColor}
								_hover={{
									textDecoration: "none",
									color: linkHoverColor,
								}}
							>
								{navItem.label}
							</Link>
						</PopoverTrigger>

						{navItem.children && (
							<PopoverContent border={0} boxShadow={"xl"} bg={popoverContentBgColor} p={4} rounded={"xl"} minW={"sm"}>
								<Stack>
									{navItem.children.map((child) => (
										<DesktopSubNav key={child.label} {...child} />
									))}
								</Stack>
							</PopoverContent>
						)}
					</Popover>
				</Box>
			))}
		</Stack>
	);
};

const DesktopSubNav = ({ label, href, subLabel }) => {
	return (
		<Link href={href} role={"group"} display={"block"} p={2} rounded={"md"} _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}>
			<Stack direction={"row"} align={"center"}>
				<Box>
					<Text transition={"all .3s ease"} _groupHover={{ color: "pink.400" }} fontWeight={500}>
						{label}
					</Text>
					<Text fontSize={"sm"}>{subLabel}</Text>
				</Box>
				<Flex
					transition={"all .3s ease"}
					transform={"translateX(-10px)"}
					opacity={0}
					_groupHover={{ opacity: "100%", transform: "translateX(0)" }}
					justify={"flex-end"}
					align={"center"}
					flex={1}
				>
					<Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
				</Flex>
			</Stack>
		</Link>
	);
};

const MobileNav = () => {
	return (
		<Stack bg={useColorModeValue("primary.300", "gray.800")} p={4} display={{ md: "none" }}>
			{NAV_ITEMS.map((navItem) => (
				<MobileNavItem key={navItem.label} {...navItem} />
			))}
		</Stack>
	);
};

const MobileNavItem = ({ label, children, href }) => {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Stack spacing={4} onClick={children && onToggle}>
			<Flex
				py={2}
				as={Link}
				href={href ?? "#"}
				justify={"space-between"}
				align={"center"}
				_hover={{
					textDecoration: "none",
				}}
			>
				<Text fontWeight={600} color={useColorModeValue("white", "black")}>
					{label}
				</Text>
				{children && (
					<Icon
						as={ChevronDownIcon}
						color="white"
						transition={"all .25s ease-in-out"}
						transform={isOpen ? "rotate(180deg)" : ""}
						w={6}
						h={6}
					/>
				)}
			</Flex>

			<Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
				<Stack
					mt={2}
					pl={4}
					borderLeft={1}
					borderStyle={"solid"}
					borderColor={useColorModeValue("gray.200", "gray.700")}
					align={"start"}
				>
					{children &&
						children.map((child) => (
							<Link color={"white"} key={child.label} py={2} href={child.href}>
								{child.label}
							</Link>
						))}
				</Stack>
			</Collapse>
		</Stack>
	);
};

const NAV_ITEMS = [
	{
		label: "About",
		href: "/",
	},
];
