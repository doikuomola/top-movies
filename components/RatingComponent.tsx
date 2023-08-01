'use client';

import ReactStars from 'react-rating-star-with-type';

type RationComponentProps = { initialRating: number };

export default function RatingComponent({
  initialRating,
}: RationComponentProps) {
  console.log(initialRating);
  return (
    <ReactStars
      value={initialRating / 2}
      activeColors={['red', 'orange', '#FFCE00', '#9177FF', '#8568FC']}
    />
  );
}
