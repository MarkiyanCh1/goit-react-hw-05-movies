import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Loader, Error } from 'components/Loader/Loader';
import {
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getMovieById } from 'services/Api';
import { Box, BtnBack } from './MovieDetails.styles';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getmovie = async () => {
      try {
        if (!movieId) return;
        setLoading(true);
        setError(false);
        const data = await getMovieById(movieId);
        setMovie(data);
      } catch (error) {
        setError(true);
        return;
      } finally {
        setLoading(false);
      }
    };

    getmovie();
  }, [movieId]);

  return (
    <Box>
      <BtnBack className="backLink" to={backLink.current}>
        &#8920; Go Back
      </BtnBack>

      {loading && <Loader />}

      {!error ? (
        <>
          <MovieCard movie={movie} />
          <ul>
            Additional information
            <li>
              <NavLink to="cast">Casts</NavLink>
            </li>
            <li>
              <NavLink to="reviews">Reviews</NavLink>
            </li>
          </ul>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      ) : (
        <Error />
      )}
    </Box>
  );
};

export default MovieDetails;
