import React from 'react';
import { BoxAbout } from './MovieCard.styles';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCard = ({ movie }) => {
  const {
    title,
    original_title,
    release_date,
    poster_path,
    overview,
    genres,
    popularity,
    vote_average,
  } = movie;

  return (
    <BoxAbout>
      <div>
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={250}
          alt="poster"
        />
      </div>
      <div>
        {title ? (
          <h2>
            {title || original_title} ({String(release_date).substring(0, 4)})
          </h2>
        ) : (
          'Unfortunately this movie was not found! Please return to Home page!'
        )}
        {vote_average && popularity ? (
          <div>
            <p>User Score {Math.floor(Number(vote_average) * 10)}%</p>
            <p>Popularity: {popularity}</p>
          </div>
        ) : (
          ' '
        )}
        {overview && overview.length > 0 ? (
          <>
            <h3>Overview</h3>
            <p>{overview}</p>
          </>
        ) : (
          'Unfortunately, no description was found for this film.'
        )}
        {genres && genres.length > 0 ? (
          <>
            <h3>Genres</h3>
            <ul>
              {genres.map(item => (
                <li key={item.id}>
                  <p>{item.name}</p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          'Not found genres'
        )}
      </div>
    </BoxAbout>
  );
};

export default MovieCard;
