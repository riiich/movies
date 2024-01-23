package com.example.MovieReviews.service;

import com.example.MovieReviews.model.Movie;
import com.example.MovieReviews.model.Review;
import com.example.MovieReviews.repository.MovieRepository;
import com.example.MovieReviews.repository.ReviewRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class ReviewService {
    private final ReviewRepository reviewRepository;

    private final MongoTemplate mongoTemplate;

    public Review createReview(String imdbId, String comment) {
        // insert review object into review database
        Review review = this.reviewRepository.insert(new Review(comment));

        // insert the new review into the array of a specific movie to keep track of all reviews on this movie
        this.mongoTemplate.update(Movie.class)
                            .matching(Criteria.where("imdbId").is(imdbId))
                            .apply(new Update().push("reviewIds").value(review))
                            .first();

        return review;
    }
}
