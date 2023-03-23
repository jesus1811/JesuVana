export interface Movie {
  id: number;
  title: string;
  description: string;
  image: string;
  episodes: Episode[];
}
export interface Episode {
  number: number;
  season: number;
  title: string;
  description: string;
  image: string;
  movie: string;
}
