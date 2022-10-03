import { CirclesWithBar, Circles } from 'react-loader-spinner';
import { LoaderWrapp } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapp>
      <Circles
        height="100"
        width="100"
        color="#ffff"
        ariaLabel="circles-with-bar-loading"
      />
    </LoaderWrapp>
  );
};
