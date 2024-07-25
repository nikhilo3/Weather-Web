import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../store/slices/WeatherdataSlice";
import { Cloud } from "@mui/icons-material";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

function locationdate({ isCurrentLocation }) {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.weatherdata);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, []);

  const currentdate = () => {
    const timeZone = data.timezone;
    const date = new Date();

    //it fetch a 1 hours time
    // const datetimeEpoch = data.currentConditions.datetimeEpoch;
    // const date = new Date(datetimeEpoch * 1000);

    const options = {
      timeZone,
      hour: "2-digit",
      minute: "2-digit",
      weekday: "long",
      day: "2-digit",
      month: "short",
      // year: "2-digit",
      year: "numeric",
      hour12: true,
    };

    // const newDate = date.toLocaleString("en-GB", options);
    const formatter = new Intl.DateTimeFormat("en-GB", options);

    const [day, , dates, , month, , year, , time1, com, time2, , period] =
      formatter.formatToParts(date).map((part) => part.value);

    const formattedDate = `${
      time1 + com + time2 + period
    } ${day}, ${dates} ${month} ${year}`;

    return formattedDate;
  };
  const date = currentdate();

  const chnageAddress = () => {
    if (isCurrentLocation) {
      return "Current Location";
    }

    const newaddress = data.resolvedAddress;
    return newaddress;
  };
  if (!data.resolvedAddress) {
  } else {
    var newadress = chnageAddress();
  }

  return (
    <>
      <div className="locationdate-container w-full max-w-[60%]">
        <div className="inner flex justify-start gap-6 items-end mt-20 relative ml-[45px]">
          <div className="temp">
            <span className="text-8xl">
              {!data.currentConditions ? (
                <h1>Loading</h1>
              ) : (
                data.currentConditions.temp + "°"
              )}
            </span>
          </div>
          <div className="locationdatecontainer flex flex-col gap-1">
            <span className="text-3xl min-w-0 max-w-[375px] text-wrap">{newadress}</span>
            <div className="date">
              <span>{!data.currentConditions ? " " : date}</span>
            </div>
          </div>
          <div className="iconcloud">
            {!data.currentConditions ? (
              ""
            ) : (
              <Cloud className="" style={{ height: "50px", width: "50px" }} />
            )}
          </div>
          <span className="text-center absolute left-[1rem] bottom-[-2rem] text-lg">
            {!data.currentConditions
              ? ""
              : `Cloudy - ${data.days[0].feelslikemin}°/${data.days[0].feelslikemax}°`}
          </span>
        </div>

        {/* other details */}
        <WeatherDetail data={data} />
      </div>
    </>
  );
}

export default locationdate;
