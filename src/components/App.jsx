import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import { Suspense, lazy } from 'react';
import { Loader } from './Loader/Loader';
import NotFoundPage from 'pages/NotFound/NotFound';
const Home = lazy(() => import('pages/Home/Home'))
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <>
      <Header />
        <Suspense
          fallback={
            <Loader/>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </Suspense>
    </>
  );
};
