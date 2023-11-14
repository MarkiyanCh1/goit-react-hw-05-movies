import MovieCard from 'components/MovieCard/MovieCard';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import { Loader, Error } from 'components/Loader/Loader';
import {
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { getMovieById } from 'services/Api';
import {
  Box,
  BtnBack,
  AddInfo,
  Nav,
  Title,
  LinkLayout,
  NavToggle,
} from './MovieDetails.styles';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Images = lazy(() => import('components/Images/Images'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [navIsOpen, setNavIsOpen] = useState(false);

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

  const toggleNav = () => {
    setNavIsOpen(!navIsOpen);
  };

  return (
    <Box>
      <BtnBack to={backLink.current}>&#8920; Go Back</BtnBack>

      {loading && <Loader />}

      {!error ? (
        <>
          <MovieCard movie={movie} />


          <AddInfo>
            <Title>Additional information</Title>
            <Nav>
              <NavToggle onClick={toggleNav}>
                <LinkLayout to="cast">Cast</LinkLayout>
              </NavToggle>
              <NavToggle onClick={toggleNav}>
                <LinkLayout to="images">Images</LinkLayout>
              </NavToggle>
              <NavToggle onClick={toggleNav}>
                <LinkLayout to="reviews">Reviews</LinkLayout>
              </NavToggle>
            </Nav>
          <p style={{ textAlign: "center", fontSize: "18px" }}>Links works as toggles temporarily. Click on link to open, click again to close </p>
          </AddInfo>


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

          {navIsOpen && (
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route path="cast" element={<Cast />} />
                <Route path="images" element={<Images />} />
                <Route path="reviews" element={<Reviews />} />
              </Routes>
            </Suspense>
          )}
        </>
      ) : (
        <Error />
      )}
    </Box>
  );
};

export default MovieDetails;
