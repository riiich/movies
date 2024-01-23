package com.example.MovieReviews.controller;

import com.example.MovieReviews.model.Movie;
import com.example.MovieReviews.service.MovieService;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/movies")
@AllArgsConstructor
@CrossOrigin(origins = "*")
public class MovieController {
    private final MovieService movieService;

    @GetMapping
    public ResponseEntity<List<Movie>> getMovies() {
        return ResponseEntity.status(HttpStatus.OK).body(this.movieService.getAllMovies());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movie>> getMovieById(@PathVariable ObjectId id) {
        return ResponseEntity.status(HttpStatus.OK).body(this.movieService.getMovieById(id));
    }

    @GetMapping("/imdb/{imdbId}")
    public ResponseEntity<Optional<Movie>> getMovieById(@PathVariable("imdbId") String imdbId) {
        return new ResponseEntity<Optional<Movie>>(this.movieService.getMovieByImdbId(imdbId), HttpStatus.OK);
    }
}
