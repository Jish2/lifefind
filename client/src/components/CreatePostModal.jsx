import {
	Button,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalContent,
	ModalCloseButton,
	ModalFooter,
	ModalBody,
	useDisclosure,
	Spacer,
	Text,
	Icon,
} from "@chakra-ui/react";

import { TbArrowBigRight, TbArrowBigLeft, TbArrowLeft, TbArrowRight } from "react-icons/tb";

import Multistep from "./PostMultiRouter";

const CreatePostModal = ({ onClose, isOpen }) => {
	return (
		<>
			<Modal onClose={onClose} isOpen={isOpen} isCentered>
				<ModalOverlay />
				<ModalContent style={{ width: "95%", height: "75%" }}>
					<ModalHeader pb={1}>Create Post</ModalHeader>
					<ModalCloseButton />
					<ModalBody py={2} style={{ overflowY: "scroll" }}>
						<Multistep />
					</ModalBody>
					{/* <ModalFooter>
						<Icon as={TbArrowLeft} mr={2} />
						<Text p={0} onClick={() => {}} variant="ghost">
							Previous
						</Text>
						<Button leftIcon={<TbArrowLeft />} onClick={() => {}} variant="outline" size="sm">
							Previous
						</Button>
						<Spacer />
						<Button rightIcon={<TbArrowRight />} onClick={() => {}} variant="outline" size="sm">
							Next
						</Button>
					</ModalFooter> */}
				</ModalContent>
			</Modal>
		</>
	);
};

export default CreatePostModal;
