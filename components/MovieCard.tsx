import { Movie } from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="h-[300px] border border-neutral-500 rounded-lg overflow-hidden shadow-lg shadow-neutral-700 hover:bg-neutral-600 transition duration-150 ease-out"
    >
      <div className="relative w-full h-1/2">
        <Image
          fill
          src={movie.image}
          alt="card image"
          className="object-cover object-center hover:scale-110 transition duration-200 ease-out"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-1/2">
        <h2 className="font-bold text-xl line-clamp-2">{movie.title}</h2>
        <p className="text-xs border border-teal-400 w-max py-1 px-2 rounded-full">
          {movie.genre}
        </p>
        <p className="text-right text-xs text-teal-500">{movie.year}</p>
      </div>
    </Link>
  );
}
