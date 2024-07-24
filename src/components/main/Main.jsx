import React from "react";
import Locationdate from "../locationdatetime/LocationDate";
import DaysForcast from "../Forecasting/DaysForcast";

function Main() {
  return (
    <>
      <div className="maincontainer flex w-full max-h-[800px]">
        <Locationdate />
        <DaysForcast />
      </div>
    </>
  );
}

export default Main;
