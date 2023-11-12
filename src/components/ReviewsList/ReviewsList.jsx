import React from 'react';

const ReviewsList = ({ reviews }) => {
  return (
    reviews.length > 0 && (
      <ul>
        {reviews.map(({ author, content, id }) => (
          <li key={id}>
            <h2>{author}</h2>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    )
  );
};

export default ReviewsList;
