import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<meta name="apple-mobile-web-app-title" content="Lifefind" />

				<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
				<meta charSet="UTF-8" />

				<link rel="shortcut icon" href="/favicons/resized.png" />
				<link rel="apple-touch-icon" sizes="180x180" href="/favicons/resized.png" />
				<link rel="icon" type="image/png" sizes="192x192" href="/favicons/192fav.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicons/32fav.png" />
				{/* <link rel="icon" type="image/png" sizes="16x16" href="/favicons/16fav.png" /> */}
				<link rel="manifest" href="/site.webmanifest" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
