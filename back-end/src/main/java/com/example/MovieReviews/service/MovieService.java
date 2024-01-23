package com.example.MovieReviews.service;

import com.example.MovieReviews.model.Movie;
import com.example.MovieReviews.repository.MovieRepository;
import lombok.AllArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class MovieService {
    private final MovieRepository movieRepository;

    public List<Movie> getAllMovies() {
        return this.movieRepository.findAll();
    }

    // return Optional because it may not exist in the database
    public Optional<Movie> getMovieById(ObjectId id) {
        return this.movieRepository.findById(id);
    }

    public Optional<Movie> getMovieByImdbId(String imdbId) {
        return this.movieRepository.findMovieByImdbId(imdbId);
    }
}
