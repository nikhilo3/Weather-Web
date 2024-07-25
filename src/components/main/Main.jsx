import React from "react";
import Locationdate from "../locationdatetime/LocationDate";
import DaysForcast from "../Forecasting/DaysForcast";

function Main({ isCurrentLocation }) {
  return (
    <>
      <div className="maincontainer flex lg:flex-row flex-col w-full lg:max-h-[900px] h-full">
        <Locationdate isCurrentLocation={isCurrentLocation}/>
        <DaysForcast />
      </div>
    </>
  );
}

export default Main;
