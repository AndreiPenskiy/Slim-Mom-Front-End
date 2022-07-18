const { Loader } = require('components/Loader/Loader');
const { useState, useEffect } = require('react');
const { useSelector } = require('react-redux');

export const LoadingPage = () => {
  const isLoading = useSelector(state => state.loading);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(!loading);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[isLoading]);

  return <>{isLoading && <Loader />}</>;
};

