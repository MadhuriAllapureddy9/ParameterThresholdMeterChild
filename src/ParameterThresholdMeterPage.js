import './App.css';
import * as React from 'react';
import ActionAreaCard from './ParameterThresholdMeterChildComponents/ActionAreaCard';
import ParameterThresholdAppBar from './ParameterThresholdMeterChildComponents/ParameterThresholdAppBar';


function ParameterThresholdMeterPage() {
  return (
    <div >
     <ParameterThresholdAppBar />
     <div className="App"> <ActionAreaCard /></div>
    </div>
  );
}

export default ParameterThresholdMeterPage;