package com.example.MovieReviews.repository;

import com.example.MovieReviews.model.Movie;
import com.example.MovieReviews.model.Review;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface MovieRepository extends MongoRepository<Movie, ObjectId> {
    Optional<Movie> findMovieByImdbId(String imdbId);
    Optional<List<Review>> findReviewsByImdbId(String imdbId);
}
