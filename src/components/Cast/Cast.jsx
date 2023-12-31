import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getCasts } from 'services/Api';
import CastList from '../CastList/CastList';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getmovie = async () => {
      try {
        if (!movieId) return;
        setLoading(true);
        const data = await getCasts(movieId);
        setCast(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getmovie();
  }, [movieId]);

  return (
    <div>
      {loading && (
        <Loader />
      )}
      <CastList cast={cast.cast} />
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Cast;
