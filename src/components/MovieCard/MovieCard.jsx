import React, { useState } from 'react';
import ModalWindow from 'components/Modal/Modal';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import {
  BoxAbout,
  AboutImg,
  Img,
  AboutText,
  Title,
  Tagline,
  Stats,
  RatingEl,
  Data,
  Genres,
  Cast,
  CastName,
  CastChar,
  CastMember,
  OverviewText,
  LinkEl,
  ButtonEl,
  ButtonGroup
} from './MovieCard.styles';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const MovieCard = ({ movie }) => {
  const {
    title,
    original_title,
    release_date,
    tagline,
    poster_path,
    overview,
    genres,
    runtime,
    vote_average,
    credits,
    homepage,
    imdb_id,
    videos
  } = movie;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(prevState => !prevState);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };


  console.log('videos - ', movie.videos);

  return (
    <BoxAbout>
      <AboutImg>
        <Img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/w500/${poster_path}`
              : defaultImg
          }
          width={500}
          alt="poster"
        />
      </AboutImg>
      <AboutText>
        {title ? (
          <Title>
            {title || original_title} ({String(release_date).substring(0, 4)})
          </Title>
        ) : (
          'Unfortunately this movie was not found! Please return to Home page!'
        )}
        {tagline ? <Tagline>{tagline}</Tagline> : ' '}
        {vote_average && runtime ? (
          <Stats>
            <RatingEl>
              <Rating
                style={{ maxWidth: 180 }}
                value={vote_average / 2}
                readOnly
              />
              <Data>{(vote_average / 2).toFixed(1)} / 5</Data>
            </RatingEl>
            <Data>{runtime}min</Data>
          </Stats>
        ) : (
          ' '
        )}
        {genres && genres.length > 0 ? (
          <>
            <Genres>
              {genres.map(item => (
                <li key={item.id}>
                  <Data>{item.name}</Data>
                </li>
              ))}
            </Genres>
          </>
        ) : (
          'Not found genres'
        )}
        <Title>Overview</Title>
        {overview && overview.length > 0 ? (
          <>
            <OverviewText>{overview}</OverviewText>
          </>
        ) : (
          'Unfortunately, no description was found for this film.'
        )}
        <Title>Top Cast</Title>
        {credits && credits.cast.length > 0 ? (
          <>
            <Cast>
              {credits.cast
                .map(member => (
                  <CastMember key={member.id}>
                    <img
                      src={
                        member.profile_path
                          ? `https://image.tmdb.org/t/p/w500/${member.profile_path}`
                          : defaultImg
                      }
                      width={120}
                      alt="poster"
                    />
                    <CastName>{member.name}</CastName>
                    <CastChar>{member.character}</CastChar>
                  </CastMember>
                ))
                .slice(0, 6)}
            </Cast>
          </>
        ) : (
          'Not found actors'
        )}
        <ButtonGroup>
          <LinkEl target="_blank" rel="noopener noreferrer" to={homepage}>
            Website
          </LinkEl>
          <LinkEl
            target="_blank"
            rel="noopener noreferrer"
            to={`https://www.imdb.com/title/${imdb_id}`}
          >
            Imdb
          </LinkEl>

          <ButtonEl onClick={toggleModal} href="#">
            Trailer
          </ButtonEl>

          {videos &&
            <ModalWindow
            videos={videos.results}
            modalIsOpen={modalIsOpen}
            closeModal={closeModal}
          />
          }

        </ButtonGroup>
      </AboutText>
    </BoxAbout>
  );
};

export default MovieCard;
