import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  List,
  MovieImg,
  MovieItem,
  MovieLink,
  MovieTitle,
} from './HomeList.styles';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const HomeList = ({ movies }) => {
  const location = useLocation();

  return (
    <List className="movieLinkList">
      {movies.map(movie => (
        <MovieLink
          state={{ from: location }}
          key={movie.id}
          to={`/movies/${movie.id}`}
        >
          <MovieItem>
            <MovieImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              width={200}
              alt="poster"
            />
            {movie.title && movie.release_date && (
                <MovieTitle>
                  {movie.title ? movie.title : movie.name}  ({movie.release_date.split('-')[0]})
                </MovieTitle>
            )}
          </MovieItem>
        </MovieLink>
      ))}
    </List>
  );
};

export default HomeList;
