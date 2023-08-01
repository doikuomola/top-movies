import { Movie } from '@/typings';
import React from 'react';
import { MovieCard } from '.';

type MoviesProps = {
  movies: Movie[];
};

export default function Movies({ movies }: MoviesProps) {
  return (
    <div className="pt-20 pb-20">
      <h1 className="text-center text-4xl font-bold">Top Rated Movies</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 py-10">
        {movies.map((movie: Movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}
