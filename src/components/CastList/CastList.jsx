import React from 'react';
import { CastListEl, CastMember } from './CastList.styles';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const CastList = ({ cast }) => {
  return (
    <CastListEl>
      {cast &&
        cast.map(({ name, profile_path, character, id }) => (
          <CastMember key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                  : defaultImg
              }
              width={150}
              alt="poster"
            />
            <h3>{name}</h3>
            <p>{character}</p>
          </CastMember>
        ))}
    </CastListEl>
  );
};

export default CastList;
