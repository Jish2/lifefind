import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import CreatePostModal from "../components/CreatePostModal";

import { Spinner, useDisclosure, Flex, Spacer } from "@chakra-ui/react";

import { InfoWindow, useLoadScript, Marker, GoogleMap } from "@react-google-maps/api";
import { useMemo, useState, useEffect } from "react";

const googlelibs = ["places"];

const MapView = () => {
	const [data, setData] = useState([]);

	async function fetchPosts() {
		try {
			const response = await fetch("http://localhost:3001/api/post");
			const results = await response.json();

			console.log(results);

			setData(results);
		} catch (error) {
			console.error(error);
		}
	}

	const { isOpen, onOpen, onClose } = useDisclosure();

	useEffect(() => {
		document.body.style.overflowY = "hidden";
		fetchPosts();
	}, []);

	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, libraries: googlelibs });

	return (
		<div style={{ height: "100vh", position: "relative" }}>
			<Topbar />
			{/* <div style={{ width: "10px", height: "173px" }}></div> */}

			{!isLoaded ? (
				<div
					style={{
						width: "100%",
						position: "absolute",

						overflowY: "hidden",

						top: "50%",
						left: "95%",

						transform: "translate(-50%, -50%)",
					}}
				>
					<Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
				</div>
			) : (
				<Map style={{ width: "100%" }} data={data} />
			)}

			<CreatePostModal onClose={onClose} isOpen={isOpen} />
			<Navbar onOpen={onOpen} />
		</div>
	);
};

function Map({ data }) {
	const containerStyle = {
		width: "100vw",
		// minHeight: "100%",
		height: "100vh",
		// height: "500px",
	};

	const center = {
		lat: 40.1075,
		lng: -88.2272,
	};

	const itemIcons = {
		airpods: "https://i.ibb.co/qgTFyJH/airpods.png",
		clothing: "https://i.ibb.co/qkZs2h3/clothing.png",
		id: "https://i.ibb.co/vkBsNJB/id.png",
		other: "https://i.ibb.co/xKbpvtZ/other.png",
		technology: "https://i.ibb.co/p0WpyjM/technology.png",
		wallet: "https://i.ibb.co/jVsmmrV/wallet.png",
	};

	const itemIcons32 = {
		airpods: "https://i.ibb.co/CPYQTyS/airpods.png",
		clothing: "https://i.ibb.co/yq7WN06/clothing.png",
		id: "https://i.ibb.co/cvz9PNy/id.png",
		other: "https://i.ibb.co/VJ6p5CS/other.png",
		technology: "https://i.ibb.co/WztBw3s/technology.png",
		wallet: "https://i.ibb.co/cYSm57c/wallet.png",
	};
	const itemIcons64 = {
		airpods: "http://localhost:3000/favicons/64x64/airpods.png",
		clothing: "http://localhost:3000/favicons/64x64/clothing.png",
		id: "http://localhost:3000/favicons/64x64/id.png",
		other: "http://localhost:3000/favicons/64x64/other.png",
		technology: "http://localhost:3000/favicons/64x64/technology.png",
		wallet: "http://localhost:3000/favicons/64x64/wallet.png",
	};

	const markers = [
		{
			id: 1,
			name: "Chicago, Illinois",
			position: { lat: 41.881832, lng: -87.623177 },
			icon: "https://i.ibb.co/CPYQTyS/airpods.png",
		},
		{
			id: 2,
			name: "Denver, Colorado",
			position: { lat: 39.739235, lng: -104.99025 },
			icon: itemIcons32.technology,
		},
		{
			id: 3,
			name: "Los Angeles, California",
			position: { lat: 34.052235, lng: -118.243683 },
			icon: itemIcons32.wallet,
		},
		{
			id: 4,
			name: "New York, New York",
			position: { lat: 40.712776, lng: -74.005974 },
			icon: itemIcons32.id,
		},
	];

	// const center = useMemo(
	// 	() => ({
	// 		lat: 40.1075,
	// 		lng: -88.2272,
	// 	}),
	// 	[]
	// );

	const [activeMarker, setActiveMarker] = useState(null);
	const handleActiveMarker = (marker) => {
		if (marker === activeMarker) {
			return;
		}
		setActiveMarker(marker);
	};

	return (
		<div style={{ marginTop: "0px", background: "green", width: "10px" }}>
			<GoogleMap zoom={14} center={center} mapContainerStyle={containerStyle} onClick={() => setActiveMarker(null)}>
				<Marker icon="https://i.ibb.co/CPYQTyS/airpods.png" position={{ lat: 40.1196456, lng: -88.2235755 }} />
				<Marker icon="https://i.ibb.co/CPYQTyS/airpods.png" position={{ lat: 40.1596456, lng: -88.2235755 }} />
				<Marker icon="https://i.ibb.co/CPYQTyS/airpods.png" position={{ lat: 40.1026456, lng: -88.2235755 }} />
				<Marker position={center} />

				{data.map(({ name, icon, category, location }, id) => (
					<Marker
						icon={itemIcons64[`${category}`]}
						key={id}
						position={{ lat: location[0], lng: location[1] }}
						// onClick={() => handleActiveMarker(id)}
					></Marker>
				))}
				<Marker icon="https://i.ibb.co/CPYQTyS/airpods.png" position={{ lat: 40.1096456, lng: -88.2235755 }} />
			</GoogleMap>
		</div>
	);
}

export default MapView;

// {activeMarker === id ? (
//     <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//         <div>{name}</div>
//     </InfoWindow>
// ) : null}
