import { Circles } from 'react-loader-spinner';
import { ErrorMessage } from './Loader.styled';

export const Loader = () => {
  return (
    <div style={{ zIndex: "1000", position: "fixed", left: "45%", top: "44%" }}>
      <Circles
        height="160"
        width="160"
        color="#4fa94d"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export const Error = () => {
  return (
    <ErrorMessage>
      <p>Whoops! Error! Please, reload the page! </p>
    </ErrorMessage>
  );
};
