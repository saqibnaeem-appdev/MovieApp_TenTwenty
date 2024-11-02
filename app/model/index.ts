interface SvgProps {
  width: number;
  height: number;
  color?: string;
}
type MovieListInfoProps = {
  id: number;
  title: string;
  backdrop_path: string;
};
type genera = {
  id: number;
  name: string;
};
type MovieDetailProps = {
  id: number;
  title: string;
  backdrop_path: string;
  overview: string;
  release_date: string;
  genres: genera[];
};

export type {SvgProps, MovieListInfoProps, MovieDetailProps, genera};
