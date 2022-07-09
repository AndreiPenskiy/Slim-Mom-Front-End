import React from 'react';
import { Circles } from 'react-loader-spinner';
import { LoaderWrapper, LoaderLayout } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderLayout>
      <LoaderWrapper>
        <Circles
          color="#f07416"
          arialLabel="loading-indicator"
          height={80}
          width={80}
        />
      </LoaderWrapper>
    </LoaderLayout>
  );
};
