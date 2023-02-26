import { useState, useCallback } from "react";
import { BottomNavigation, BottomNavigationItem, BottomNavigationIcon, BottomNavigationLabel } from "chakra-ui-bottom-navigation";

import { useDisclosure } from "@chakra-ui/react";

import { TbSmartHome, TbSearch, TbStar, TbMap, TbUser, TbSquarePlus, TbInfoCircle } from "react-icons/tb";

import { useRouter } from "next/router";

import CreatePostModal from "./CreatePostModal";

const Navbar = ({ onOpen }) => {
	const router = useRouter();

	const [value, setValue] = useState(0);
	const iconWH = [8, 8];

	const handleChange = useCallback(
		(path) => {
			router.push(path);
		},
		[router.push]
	);

	return (
		<BottomNavigation
			borderRadius={10}
			p="10px 0 5px 0"
			value={router.pathname}
			onChange={handleChange}
			colorScheme="navbar"
			variant="float"
			showLabel="never"
			style={{
				WebkitUserSelect: "none",
				MozUserSelect: "none",
				MsUserSelect: "none",
				userSelect: "none",
				WebkitTapHighlightColor: "transparent",
				zIndex: 100,
			}}
		>
			<BottomNavigationItem
				value="/feed"
				m={0}
				// _active={{}}
				onClick={() => {
					console.log("HI!");
				}}
			>
				<BottomNavigationIcon as={TbSmartHome} w={iconWH[0]} h={iconWH[1]} />
				<BottomNavigationLabel>Home</BottomNavigationLabel>
			</BottomNavigationItem>

			<BottomNavigationItem m={0} _active={{}} onClick={onOpen}>
				<BottomNavigationIcon as={TbSquarePlus} w={iconWH[0]} h={iconWH[1]} />
				<BottomNavigationLabel>Create</BottomNavigationLabel>
			</BottomNavigationItem>

			<BottomNavigationItem m={0} _active={{}} value="/map">
				<BottomNavigationIcon as={TbMap} w={iconWH[0]} h={iconWH[1]} />
				<BottomNavigationLabel>Map</BottomNavigationLabel>
			</BottomNavigationItem>

			{/* <BottomNavigationItem m={0} _active={{}} value="/">
				<BottomNavigationIcon as={TbInfoCircle} w={iconWH[0]} h={iconWH[1]} />
				<BottomNavigationLabel>Info</BottomNavigationLabel>
			</BottomNavigationItem>

			<BottomNavigationItem m={0} _active={{}} value="/dashboard">
				<BottomNavigationIcon as={TbUser} w={iconWH[0]} h={iconWH[1]} />
				<BottomNavigationLabel>Profile</BottomNavigationLabel>
			</BottomNavigationItem> */}
		</BottomNavigation>
	);
};

export default Navbar;
