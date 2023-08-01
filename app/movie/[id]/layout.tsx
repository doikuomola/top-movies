import { RatingComponent } from '@/components';
import { Movie } from '@/typings';
import Image from 'next/image';
import React, { ReactNode } from 'react';

type MoviePageProp = {
  params: { id: string };
  children: ReactNode;
};

async function getMovie(id: string) {
  const url = `https://imdb-top-100-movies.p.rapidapi.com/${id}`;
  const options = {
    method: 'GET',
    next: {
      revalidate: 300,
    },
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

export default async function Movie({
  params: { id },
  children,
}: MoviePageProp) {
  const movie = (await getMovie(id)) as Movie;

  return (
    <main className="py-10 space-y-4">
      <h1 className="text-center text-4xl font-serif font-bold">
        {movie.title}
      </h1>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          className="object-cover"
          src={movie.image}
          fill
          alt={movie.title + ' image'}
        />
      </div>

      <div className="flex gap-20">
        <div className="flex-1">
          <div className="flex flex-col w-full gap-1">
            <p className="flex items-center gap-2 font-semibold">
              Genres:
              {movie.genre.map((g, i) => (
                <span key={i}>{g}</span>
              ))}
            </p>
            <div className="flex items-center gap-2 font-semibold">
              <p>Rating: </p>
              <RatingComponent initialRating={Number(movie.rating)} />
            </div>
          </div>

          <p className="flex mt-5 items-center gap-2 text-neutral-300 text-sm tracking-widest font-sans">
            {movie.description}
          </p>
        </div>

        <div className="flex-1">{children}</div>
      </div>
    </main>
  );
}
