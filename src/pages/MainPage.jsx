import React from 'react';
import { PageContainer } from 'components/PageContainer/PageContainer';

import { Background } from 'components/Background/Background';
import { DailyCaloriesForm } from '../components/DailyCaloriesForm/DailyCaloriesForm';
const MainPage = () => {
  return (
    <>
      <PageContainer>
        <div>MainPage</div>
        <DailyCaloriesForm />
        <Background />
      </PageContainer>
    </>
  );
};

export default MainPage;
