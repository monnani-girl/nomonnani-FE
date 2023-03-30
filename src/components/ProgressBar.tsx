import React, { useState } from 'react';
import { Line } from 'rc-progress';

const ProgressBar = () => {
    const [currentStep, setCurrentStep] = useState(20);

    const handlePrevStep = () => {
        setCurrentStep(currentStep > 20 ? currentStep - 20 : currentStep);
    }

    const handleNextStep = () => {
        setCurrentStep(currentStep < 100 ? currentStep + 20 : currentStep);
    };

    return (
        <>
            <Line percent={currentStep} strokeWidth={1} strokeColor="#4AE7A4" trailColor='#e3f2ff' />
            <button onClick={handlePrevStep}>Prev Step</button>
            <button onClick={handleNextStep}>Next Step</button>
        </>
    )
}

export default ProgressBar;