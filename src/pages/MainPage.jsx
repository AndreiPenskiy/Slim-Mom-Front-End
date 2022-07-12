import React from 'react';
import { Background } from 'components/Background/Background';
import { DailyCaloriesForm } from '../components/DailyCaloriesForm/DailyCaloriesForm';
const MainPage = () => {
  return (
    <>
      <DailyCaloriesForm />
      <Background />
    </>
  );
};

export default MainPage;
