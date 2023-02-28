import { ChakraProvider } from "@chakra-ui/react";
import "@/styles/globals.css";

import { extendTheme } from "@chakra-ui/react";

import "@fontsource/be-vietnam-pro";

import { BottomNavigationStyleConfig as BottomNavigation } from "chakra-ui-bottom-navigation";
import Head from "next/head";

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
		700: "#E48444",
		500: "#F79858",
		300: "#FFAF7A",
	},
	navbar: {
		900: "#ffffff",
		700: "red",
		500: "red",
		300: "#F79858",
	},
};

const theme = extendTheme({
	fonts,
	colors,
	components: {
		BottomNavigation,
	},
});

function App({ Component, pageProps }) {
	return (
		<ChakraProvider theme={theme}>
			<Head>
				<title>Lifefind</title>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
			</Head>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}

export default App;
