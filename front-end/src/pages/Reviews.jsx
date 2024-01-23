import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ReviewForm } from "../components/ReviewForm";
import axios from "axios";

export const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
	const reviewText = useRef(); // get the reference of the review from the textarea
	let params = useParams();
	const movieId = params.movieId;

	const addReview = async (e) => {
		e.preventDefault();

		const rev = reviewText.current;

		try {
			const res = await axios.post("http://localhost:8080/api/v1/movie-reviews", {
                imdbId: movieId,
				review: rev.value,
			});

            const updatedReviews = [...reviews, { body: rev.value }];
			setReviews(updatedReviews);
			rev.value = "";     // after submitting a review, clear the review
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getMovieData(movieId);
	}, []);

	return (
		<Container>
			<Row>
				<Col>
					<h3>Reviews</h3>
				</Col>
			</Row>
			<Row className="mt-2">
				<Col>
					<img src={movie?.poster} alt="" />
				</Col>
				<Col>
					{
						<>
							<Row>
								<Col>
									<ReviewForm
										handleSubmit={addReview}
										reviewText={reviewText}
										labelText="Write a Review"
									/>
								</Col>
							</Row>
							<Row>
								<Col>
									<hr />
								</Col>
							</Row>
						</>
					}
					{reviews?.map((r) => {
						return (
							<>
								<Row>
									<Col>{r.body}</Col>
								</Row>
								<Row>
									<Col>
										<hr />
									</Col>
								</Row>
							</>
						);
					})}
				</Col>
			</Row>
			<Row>
				<Col>
					<hr />
				</Col>
			</Row>
		</Container>
	);
};
