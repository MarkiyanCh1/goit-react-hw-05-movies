import React from 'react';
import { ReviewsListEl, ReviewEl } from './ReviewsList.styles';

const ReviewsList = ({ reviews }) => {
  return (
    reviews.length > 0 && (
      <ReviewsListEl>
        {reviews.map(({ author, content, id }) => (
          <ReviewEl key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </ReviewEl>
        ))}
      </ReviewsListEl>
    )
  );
};

export default ReviewsList;
