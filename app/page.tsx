import { Movies } from '@/components';
import { Movie } from '@/typings';
import console from 'console';
import React from 'react';

export const revalidate = 300;

async function getMovies() {
  const url = 'https://imdb-top-100-movies.p.rapidapi.com/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '39ae9ef86amsh26845561816f5cbp1cccd0jsn28fbabd67dd5',
      'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    return result;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const movies = (await getMovies()) as Movie[];

  return (
    <div>
      <Movies movies={movies} />
    </div>
  );
}
