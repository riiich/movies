import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Button from "react-bootstrap/Button";
import "../styles/Hero.css";

const Hero = ({ movies }) => {
    const navigate = useNavigate();

    const goToMovieReviews = (movieId) => {
        navigate(`/reviews/${movieId}`);
    }

	return (
		<div className="movie-carousel-container">
			<Carousel>
				{movies?.map((movie) => (
					<Paper>
						<div className="movie-card-container">
							<div className="movie-card" style={{ "--img": `url(${movie.backdrops[5]})` }}>
								<div className="movie-detail">
									<div className="movie-poster">
										<img src={movie.poster} alt="" />
									</div>
									<div className="movie-title">
										<h2>{movie.title}</h2>
									</div>
									<div className="movie-trailer-button-container">
										<div className="play-button-container">
											<Link
												to={`/trailer/${movie.trailerLink.substring(
													movie.trailerLink.length - 11
												)}`}    // get the last 11 characters on youtube video
											>
												<FontAwesomeIcon
													className="play-button-icon"
													icon={faCirclePlay}
												/>
											</Link>
                                            <div className="movie-review-button-container">
                                                <Button variant="info" onClick={() => goToMovieReviews(movie.imdbId)}>Reviews</Button>
                                            </div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</Paper>
				))}
			</Carousel>
		</div>
	);
};

export default Hero;
