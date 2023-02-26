import { Box, Center, useColorModeValue, Heading, Text, Stack, Image, Flex, Button, Spacer, Icon } from "@chakra-ui/react";

import { TbMapPin } from "react-icons/tb";

import { useEffect, useState } from "react";

export default function ProductSimple({ name, category, description, color, imageURL, location, _id }) {
	const [addy, setAddy] = useState("");

	useEffect(() => {
		// coordsToAddress(location[0], location[1]);
		// placeToAddy();
	}, []);

	// async function placeToAddy() {
	// 	const response = await fetch(
	// 		`https://maps.googleapis.com/maps/api/place/details/json?placeid=${location}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
	// 	);
	// 	const data = await response.json();
	// 	console.log(data);
	// }
	async function coordsToAddress(lat, lng) {
		const res = await fetch(
			`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`
		);
		const data = await res.json();
		console.log(data.results[0].formatted_address);
		setAddy(data?.results[0]?.formatted_address);
	}

	return (
		<Center py={12}>
			<Box
				role={"group"}
				p={6}
				maxW={"330px"}
				w={"full"}
				bg={useColorModeValue("white", "gray.800")}
				boxShadow={"2xl"}
				rounded={"lg"}
				pos={"relative"}
				zIndex={1}
			>
				<Box
					rounded={"lg"}
					mt={-12}
					pos={"relative"}
					height={"230px"}
					_after={{
						transition: "all .3s ease",
						content: '""',
						w: "full",
						h: "full",
						pos: "absolute",
						top: 5,
						left: 0,
						backgroundImage: `url(${imageURL})`,
						filter: "blur(15px)",
						zIndex: -1,
					}}
					_groupHover={{
						_after: {
							filter: "blur(20px)",
						},
					}}
				>
					<Image rounded={"lg"} height={230} width={282} objectFit={"cover"} src={imageURL} />
				</Box>
				<Stack pt={10} align={"center"}>
					<Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
						{category}
					</Text>
					<Flex justifyContent="center" alignItems="center" gap={3}>
						<div
							style={{
								width: "20px",
								height: "20px",
								backgroundColor: color,
								borderRadius: "100%",
							}}
						></div>
						<Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
							{name}
						</Heading>
					</Flex>

					<Text fontSize={"sm"} color={"gray.500"}>
						{description}
					</Text>

					<Flex flexDirection="row" alignItems="center" width="100%" color={"gray.500"}>
						<Icon as={TbMapPin} w={5} h={5} ml={1} mr={1} />
						<Text textOverflow="ellipsis" noOfLines={1}>
							{/* {addy} */}
						</Text>
						<Spacer />
						<Button size="sm" ml={2} p={4} colorScheme="primary">
							Found
						</Button>
					</Flex>
				</Stack>
			</Box>
		</Center>
	);
}
