import HomeList from 'components/HomeList/HomeList';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getMoviesbyQuery } from 'services/Api';
import { Loader, Error } from 'components/Loader/Loader';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    const getmovie = async () => {
      try {
        if (!query) return;
        setLoading(true);
        setError(false);
        const data = await getMoviesbyQuery(query);
        setMovies(data.results);
        if (data.results.length === 0) {
          toast.error('Not found any movie!');
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    getmovie();
  }, [query]);

  const handleOnSubmit = e => {
    e.preventDefault();
    const searchQuery = e.currentTarget.elements.query.value;
    if (searchQuery === '') {
      toast.error('Please fill out this field!');
      return setSearchParams({});
    }
    setSearchParams({ query: searchQuery });
    e.currentTarget.reset();
  };

  return (
    <>
      <form className="form" onSubmit={handleOnSubmit}>
        <label>
          <p>Search movie by name</p>
          <input
            className="input"
            type="text"
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search..."
          />
        </label>
        <button className="btnSubmit">Search</button>
      </form>
      {loading && <Loader />}
      {movies.length > 0 && <HomeList movies={movies} />}
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
    </>
  );
};

export default Movies;
