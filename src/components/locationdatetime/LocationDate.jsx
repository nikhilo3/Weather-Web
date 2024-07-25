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
      <div className="locationdate-container w-full lg:max-w-[60%] max-w-[100%]">
        <div className="inner flex lg:justify-start justify-center mr-8 ml-8 lg:gap-8 gap-4 items-end mt-12 relative lg:ml-[45px]">
          <div className="temp">
            <span className="lg:text-8xl text-5xl">
              {!data.currentConditions ? (
                <h1>Loading</h1>
              ) : (
                data.currentConditions.temp + "°"
              )}
            </span>
          </div>
          <div className="locationdatecontainer flex flex-col gap-1">
            <span className="text-3xl min-w-0 max-w-[375px] text-wrap">
              {newadress}
            </span>
          </div>
          <div className="iconcloud">
            {!data.currentConditions ? (
              ""
            ) : (
              <Cloud className="" style={{ height: "50px", width: "50px" }} />
            )}
          </div>
        </div>

        <div className="flex flex-col lg:justify-start lg:items-start md:justify-center items-center mr-8 ml-8 lg:ml-[45px]">
          <div className="date mt-6 font-bold">
           {!data.currentConditions ? " " : date}
          </div>
          <div className=" font-bold mt-4">
            {!data.currentConditions
              ? ""
              : `Cloudy - ${data.days[0].feelslikemin}°/${data.days[0].feelslikemax}°`}
          </div>
        </div>

        {/* other details */}
        <WeatherDetail data={data} />
      </div>
    </>
  );
}

export default locationdate;
