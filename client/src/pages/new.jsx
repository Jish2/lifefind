import ImageUpload from "../components/ImageUpload";
import { Flex } from "@chakra-ui/react";

const New = () => {
	return (
		<>
			<Flex justify="center" align="center" style={{ height: "100vh" }}>
				<ImageUpload />
			</Flex>
		</>
	);
};

export default New;
