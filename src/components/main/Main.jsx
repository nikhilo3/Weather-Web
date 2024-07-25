import React from "react";
import Locationdate from "../locationdatetime/LocationDate";
import DaysForcast from "../Forecasting/DaysForcast";

function Main({ isCurrentLocation }) {
  return (
    <>
      <div className="maincontainer flex w-full max-h-[800px]">
        <Locationdate isCurrentLocation={isCurrentLocation}/>
        <DaysForcast />
      </div>
    </>
  );
}

export default Main;
