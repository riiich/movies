import "./styles/App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Movies from "./components/Movies";
import Navigationbar from "./components/Navigationbar";
import { Trailer } from "./components/Trailer";
import { Reviews } from "./pages/Reviews";
import { NotFound } from "./pages/NotFound";

function App() {
	const [movies, setMovies] = useState([]);
	const [movie, setMovie] = useState(null);
	const [reviews, setReviews] = useState([]);

	//
	const getMovieData = async (movieId) => {
		try {
			const res = await axios.get(`http://localhost:8080/api/v1/movies/imdb/${movieId}`);

			setMovie(res.data);
			setReviews(res.data.reviews);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		const loadMovies = async () => {
			try {
				const res = await axios.get("http://localhost:8080/api/v1/movies");

				setMovies(res.data);
			} catch (err) {
				console.log(err);
			}
		};

		loadMovies();
	}, []);

	return (
		<div className="App">
			<Navigationbar />
			<Routes>
				<Route path="/" element={<Movies movies={movies} />} />
				<Route path="/trailer/:trailerLinkId" element={<Trailer />} />
				<Route
					path="/reviews/:movieId"
					element={
						<Reviews
							getMovieData={getMovieData}
							movie={movie}
							reviews={reviews}
							setReviews={setReviews}
						/>
					}
				/>
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Movies />
		</div>
	);
}

export default App;
