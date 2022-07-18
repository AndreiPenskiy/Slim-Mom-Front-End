const { Loader } = require('components/Loader/Loader');
const { useSelector } = require('react-redux');

export const LoadingPage = () => {
  const isLoading = useSelector(state => state.loading);
 
  return <>{isLoading && <Loader />}</>;
};

