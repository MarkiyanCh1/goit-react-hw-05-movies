import ReviewsList from 'components/ReviewsList/ReviewsList';
import React, { useEffect, useState } from 'react';
import { Loader } from 'components/Loader/Loader';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { getReviews } from 'services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getmovie = async () => {
      try {
        if (!movieId) return;
        setLoading(true);
        const data = await getReviews(movieId);
        setReviews(data.results);
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
      {reviews.length > 0 ? (
        <ReviewsList reviews={reviews} />
      ) : (
        <h3>We don`t have any reviews for this movie</h3>
      )}
      <ToastContainer position="top-right" />
    </div>
  );
};

export default Reviews;
