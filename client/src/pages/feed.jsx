import { useState, useEffect } from "react";
import { Heading, Text, Flex, useDisclosure } from "@chakra-ui/react";
import { BottomNavigation } from "chakra-ui-bottom-navigation";
import Navbar from "../components/Navbar";
import CreatePostModal from "../components/CreatePostModal";
import Head from "next/head";

// import InfiniteScroll from "react-infinite-scroll-component";

import Post from "../components/Post";

import Topbar from "../components/Topbar";

export async function getServerSideProps() {
	const res = await fetch("http://localhost:3001/api/post");
	const postsFromDB = await res.json();
	return { props: { postsFromDB } };
}

export default function Home({ postsFromDB }) {
	const [data, setData] = useState(postsFromDB);
	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		console.log(data);
	}, []);

	async function fetchPosts() {
		try {
			const response = await fetch("http://localhost:3001/api/post");
			const results = await response.json();

			console.log(response);

			return results;
		} catch (error) {
			console.error(error);
		}
	}

	return (
		<>
			<div>
				<Head>
					<title>Lifefind</title>
				</Head>

				<Topbar />

				<div style={{ width: "10px", height: "173px" }}></div>

				<Flex justifyContent="center" flexDirection="column">
					{data.map((item, index) => {
						return <Post {...item} key={index} />;
					})}
				</Flex>

				<div style={{ width: "10px", height: "173px" }}></div>

				<CreatePostModal onClose={onClose} isOpen={isOpen} />
				<Navbar onOpen={onOpen} />
			</div>
		</>
	);
}
