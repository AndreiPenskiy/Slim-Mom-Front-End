import React from 'react'
import { DailyCaloriesForm } from '../components/DailyCaloriesForm/DailyCaloriesForm';
import { RightSideBar } from '../components/RightSideBar/RightSideBar';

const CalculatorPage = () => {
    return (
        <>
            <DailyCaloriesForm publicPage={false} />
            <RightSideBar />
        </>
    );
}

export default CalculatorPage;