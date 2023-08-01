// Generated by https://quicktype.io

export interface Movie {
  rank: number;
  title: string;
  image: string;
  genre: string[];
  thumbnail: string;
  rating: string;
  id: string;
  year: number;
  description: string;
}

export interface Comment {
  id: string;
  comment: string;
  movieId: string;
  createdAt: string;
}