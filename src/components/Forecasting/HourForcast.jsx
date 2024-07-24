import { AcUnit } from "@mui/icons-material";
import React from "react";

function HourForcast({ datas }) {
  console.log("hours data =", datas);

  // Get the current hour
  const currentHour = new Date().getHours();

  // Filter the hours array to start from the current hour
  if(!datas){
    // return " "
  }else{
    var filteredHours = datas.slice(currentHour);
  }

  const changeHourFormat = (hour) => {
    // 18:00:00

    const date = new Date();
    const [hours] = hour.split(":").map(Number);

    date.setHours(hours);
    // const currenthour = new Date().getHours(hour);

    const formatted = new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      hour12: true,
    }).format(date);

    return formatted;
  };

  return (
    <>
      <h1 className="font-bold text-xl mt-8">Hour forecast</h1>

      <div className="pb-[6rem]">
        {!datas
          ? <h1>Loading...</h1>
          : filteredHours.map((hours, index) => {
              return (
                <div className="daycast w-full py-4" key={index}>
                  <div className="castbox flex gap-8 w-full justify-start items-center">
                    <AcUnit style={{ height: "40px", width: "40px" }} />
                    <div className="date flex flex-col ml-4">
                      <span className="text-2xl">
                        {changeHourFormat(hours.datetime)}
                      </span>
                      <span className="preciptype font-bold text-xl">
                        {hours.conditions}
                      </span>
                    </div>
                    <span className="temp text-3xl ml-auto">{hours.temp}°</span>
                  </div>
                </div>
              );
            })}
      </div>
    </>
  );
}

export default HourForcast;
