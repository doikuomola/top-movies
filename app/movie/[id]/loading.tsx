'use client';

import { RatingComponent } from '@/components';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function loading() {
  return (
    <main className="py-10 space-y-4">
      <h1 className="text-center text-4xl font-serif font-bold">
        <Skeleton count={1} />
      </h1>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Skeleton count={1} />
      </div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-20">
        <div className="flex-1">
          <div className="flex flex-col w-full gap-1">
            <p className="flex items-center gap-2 font-semibold">
              Genres:
              <Skeleton count={1} />
            </p>
            <div className="flex items-center gap-2 font-semibold">
              <p>Rating: </p>
              <Skeleton count={1} />
            </div>
          </div>

          <p className="flex mt-5 items-center gap-2 text-neutral-300 text-sm tracking-widest font-sans">
            <Skeleton count={Math.floor(Math.random() * 10)} />
          </p>
        </div>

        <div className="flex-1">
          <Skeleton count={1} />
          <Skeleton count={5} />
          <Skeleton count={2} />
        </div>
      </div>
    </main>
  );
}
