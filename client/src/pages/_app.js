import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";

import { extendTheme } from "@chakra-ui/react";

import "@fontsource/be-vietnam-pro";

const fonts = {
	heading:
		`'Be Vietnam Pro'` +
		`,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
	body:
		`'Be Vietnam Pro'` +
		`,-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`,
};

const colors = {
	primary: {
		900: "#1a365d",
		800: "#153e75",
		700: "#2a69ac",
	},
};

const theme = extendTheme({ fonts, colors });

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default App;
