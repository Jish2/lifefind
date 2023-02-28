import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import CreatePostModal from "../components/CreatePostModal";

import { Spinner, useDisclosure, Flex, Spacer } from "@chakra-ui/react";

import { InfoWindow, useLoadScript, MarkerF, GoogleMap } from "@react-google-maps/api";
import { useMemo, useState, useEffect, useRef, useCallback } from "react";

const googlelibs = ["places"];

const MapView = () => {
	const itemIcons = {
		airpods: "https://i.ibb.co/DQp9vyH/airpods.png",
		clothing: "https://i.ibb.co/8rCxqSD/clothing.png",
		id: "https://i.ibb.co/Wxkgjf3/id.png",
		other: "https://i.ibb.co/PMGNwf6/other.png",
		technology: "https://i.ibb.co/G5nQNgX/technology.png",
		wallet: "https://i.ibb.co/m5pYJtz/wallet.png",
		female: "https://i.ibb.co/dQ5txnL/female.png",
		male: "https://i.ibb.co/PczktbS/male.png",
	};

	const iconSize = 70;

	const map = useRef();

	const libraries = useMemo(() => ["places"], []);
	const center = useMemo(() => ({ lat: 40.1075, lng: -88.2272 }), []);

	const [data, setData] = useState([]);
	const [activeMarker, setActiveMarker] = useState();
	const [allLoaded, setAllLoaded] = useState(false);
	const [currentCenter, setCurrentCenter] = useState(center);
	const [currentPosition, setCurrentPosition] = useState();

	const { isOpen, onOpen, onClose } = useDisclosure();

	const { isLoaded } = useLoadScript({ googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, libraries: libraries });

	function findMeClick() {
		if (navigator.geolocation) {
			localStorage.setItem("locationPermission", true);
			// navigator.geolocation.getCurrentPosition(function showPosition(position) {
			// 	console.log(position.coords.latitude, position.coords.longitude);
			// });
			navigator.geolocation.getCurrentPosition(
				(position) => {
					// console.log(position);
					setCurrentPosition([position.coords.latitude, position.coords.longitude]);
					performPan({ lat: position.coords.latitude, lng: position.coords.longitude });
				},
				() => null
			);
		}
	}

	const performPan = useCallback(({ lat, lng }) => {
		map.current.panTo({ lat, lng });
		map.current.setZoom(17);
	}, []);

	const onMapLoad = useCallback((mapObject) => {
		// create reference for initial map load
		map.current = mapObject;
	}, []);

	async function fetchPosts() {
		try {
			const response = await fetch("http://localhost:3001/api/post");
			const results = await response.json();
			// console.log(results);
			setData(results);
		} catch (error) {
			console.error(error);
		}
	}

	const handleActiveMarker = (e, marker) => {
		// what do we do when marker is clicked?
		if (marker === activeMarker) return;

		const lat = e.latLng.lat();
		const lng = e.latLng.lng();

		performPan({
			lat: lat,
			lng: lng,
		});

		// setCurrentCenter({ lat: lat, lng: lng });

		setActiveMarker(marker);
	};

	// externally set map controls (not provided in wrapper)
	function handleMapReady(map) {
		map.setOptions({
			draggableCursor: "default",
			draggingCursor: "pointer",
			gestureHandling: "greedy",

			mapTypeControl: false,

			streetViewControl: false,
			rotateControl: false,
			fullscreenControl: false,
			// scaleControl: false,
			// scaleControlOptions: {
			// 	// position: google.maps.ScaleControlOptions.RIGHT_CENTER,
			// 	position: google.maps.ScaleControlOptions.RIGHT_CENTER,
			// },
			// mapTypeControlOptions: {
			// 	style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
			// 	position: google.maps.ControlPosition.RIGHT_CENTER,
			// },

			zoomControl: true,
			zoomControlOptions: {
				position: google.maps.ControlPosition.RIGHT_CENTER,
			},
		});
	}

	useEffect(() => {
		document.body.style.overflowY = "hidden";
		document.documentElement.style.overflowY = "hidden";
		fetchPosts();
		if (!navigator.geolocation) {
			localStorage.setItem("locationPermission", false);
		} else if (localStorage.getItem("locationPermission") === "true") {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setCurrentPosition([position.coords.latitude, position.coords.longitude]);
				},
				() => null
			);
		}
	}, []);

	useEffect(() => {
		if (isLoaded && data) {
			setAllLoaded(true);
		}
	}, [isLoaded]);

	return (
		<div style={{ height: "100vh", position: "relative", overflowY: "hidden" }}>
			<Topbar findMeClick={findMeClick} />
			{/* <div style={{ width: "10px", height: "173px" }}></div> */}

			{!allLoaded ? (
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
				<GoogleMap
					// ref={map}
					zoom={14}
					center={currentCenter}
					mapContainerStyle={{
						width: "100vw",
						height: "100vh",
					}}
					onClick={() => setActiveMarker(null)}
					clickableIcons={false}
					onLoad={(map) => {
						handleMapReady(map);
						onMapLoad(map);
					}}
				>
					{currentPosition && (
						<MarkerF
							icon={{
								url: itemIcons["male"],
								scaledSize: new google.maps.Size(iconSize, iconSize), // scaled size
							}}
							position={{ lat: currentPosition[0], lng: currentPosition[1] }}
							onClick={handleActiveMarker}
						></MarkerF>
					)}
					{data.map(({ name, icon, category, location }, id) => (
						<MarkerF
							icon={{
								url: itemIcons[`${category}`],
								scaledSize: new google.maps.Size(iconSize, iconSize), // scaled size
							}}
							key={id}
							position={{ lat: location[0], lng: location[1] }}
							onClick={(e) => handleActiveMarker(e, id)}
						></MarkerF>
					))}
				</GoogleMap>
			)}

			<CreatePostModal onClose={onClose} isOpen={isOpen} />
			<Navbar onOpen={onOpen} />
		</div>
	);
};

export default MapView;

// {activeMarker === id ? (
//     <InfoWindow onCloseClick={() => setActiveMarker(null)}>
//     <div>{name}</div>
// </InfoWindow>
// ) : null}
