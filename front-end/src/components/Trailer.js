import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "../styles/Trailer.css";

// <FontAwesomeIcon icon={faCirclePlay} />

export const Trailer = () => {
	let params = useParams(); // useParams hook allows us access to URL parameters within our components
	const trailerLinkId = params.trailerLinkId;

	return (
		<div className="trailer-video-container">
			{trailerLinkId ? (
				<ReactPlayer
					controls={true}
					playing={true}
					url={`https://www.youtube.com/watch?v=${trailerLinkId}`}
					width="100%"
					height="100%"
				/>
			) : null}
		</div>
	);
};
