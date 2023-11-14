import React from 'react';
import { ImageListEl, ImageEl, Image } from './ImagesList.styles';
const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const ImagesList = ({ images }) => {
  return (
    <ImageListEl>
      {images &&
        images.map(({ file_path, id }) => (
          <ImageEl key={id}>
            <Image
              src={
                file_path
                  ? `https://image.tmdb.org/t/p/w500/${file_path}`
                  : defaultImg
              }
              width={150}
              alt="poster"
            />

          </ImageEl>
        ))}
    </ImageListEl>
  );
};

export default ImagesList;
