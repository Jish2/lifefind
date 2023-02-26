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
import { useState } from "react";

export default function WithSubnavigation() {
	const { isOpen, onToggle } = useDisclosure();

	return (
		<Box position="fixed" zIndex={100}>
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
