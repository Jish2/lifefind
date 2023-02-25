import { Heading, Text } from "@chakra-ui/react";

export default function Home() {
	return (
		<>
			<div>
				<Heading>Title</Heading>
				<Text>
					Fontsource is an updating monorepo full of self-hostable fonts bundled into individual NPM
					packages. It currently supports all Google Fonts and a small subset of other custom Open
					Source fonts that have been manually added. Hosting your own fonts locally within a
					project can lead to large performance gains as they won't experience extra (render
					blocking) network requests, as well as streamlining developer experiences. For the
					purposes of this guide, we'll use Open Sans for the heading font and Raleway for the body
					font. If you have a different font you want to use, you can find the corresponding package
					on NPM or their website.
				</Text>
			</div>
		</>
	);
}
