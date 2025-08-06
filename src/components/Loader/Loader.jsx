import { RotatingLines } from 'react-loader-spinner';
import { LoaderWrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrapper>
      <RotatingLines
        strokeColor="#1976d2"
        strokeWidth="5"
        animationDuration="0.75"
        width="48"
        visible={true}
      />
    </LoaderWrapper>
  );
};
