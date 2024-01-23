package com.example.MovieReviews.controller;

import com.example.MovieReviews.model.Review;
import com.example.MovieReviews.service.ReviewService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@AllArgsConstructor
@RequestMapping("/api/v1/movie-reviews")
@CrossOrigin(origins = "*")
public class ReviewController {
    private final ReviewService reviewService;

    @PostMapping
    public ResponseEntity<Review> postReview(@RequestBody Map<String, String> payload) {
        return new ResponseEntity<Review>(this.reviewService.createReview(payload.get("imdbId"), payload.get("review")), HttpStatus.CREATED);
    }
}
