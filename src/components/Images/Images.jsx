import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getImages } from 'services/Api';
import { Loader } from 'components/Loader/Loader';
import ImagesList from 'components/ImagesList/ImagesList';

const Images = () => {
  const { movieId } = useParams();
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getmovie = async () => {
      try {
        if (!movieId) return;
        setLoading(true);
        const data = await getImages(movieId);
        setImages(data.backdrops);
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
      {images.length > 0 ? (
        <ImagesList images={images} />
      ) : (
        <h3>We don`t have any images for this movie</h3>
      )}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Images;
