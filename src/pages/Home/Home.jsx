import HomeList from 'components/HomeList/HomeList';
import { useEffect, useState } from 'react';
import { getMovies } from 'services/Api';
import { Loader, Error } from 'components/Loader/Loader';
import { MovieList, Title } from './Home.styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    const allMovies = async () => {
      try {
        setLoading(true);
        setError(false);
        const { results } = await getMovies();
        setMovies(results);
        if (results.length === 0) {
          toast.error('Not found any movie!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    allMovies();
  }, []);

  return (
    <MovieList>
      <Title className="title">Trending today</Title>
      {loading && <Loader />}
      <HomeList movies={movies} />
      {error && <Error />}
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
    </MovieList>
  );
};

export default Home;
