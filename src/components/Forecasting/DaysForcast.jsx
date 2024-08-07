import React, { useEffect, useState } from "react";
import HourForcast from "./HourForcast";
import styled from "styled-components";
import { Cloud } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../store/slices/WeatherdataSlice";

function DaysForcast() {
  const dispatch = useDispatch();
  const [hourData, setHourData] = useState(null); // State to store hour data

  const data = useSelector((state) => state.weatherdata.data.days);

  useEffect(() => {
    dispatch(fetchWeatherData());
  }, [dispatch]);

  useEffect(() => {
    if (data && data.length > 0) {
      setHourData(data[0].hours); // Assuming you want to pass the hours of the first day
    }
  }, [data]);

  const fetchday = (date) => {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const inputDate = new Date(date);

    const isSameDate = (d1, d2) => d1.toDateString() === d2.toDateString();

    if (isSameDate(inputDate, today)) {
      return "Today";
    }

    if (isSameDate(inputDate, tomorrow)) {
      return "Tomorrow";
    }

    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    var strtodate = new Date(date);
    return daysOfWeek[strtodate.getDay()];
  };

  const fetchcurrenthour = () => {
    if (!data) {
      return "Loading...";
    } else {
      return data[0].hours;
    }
  };
  fetchcurrenthour();

  return (
    <Wrapper className="dayscontainer w-full lg:max-w-[40%] max-w-[100%] p-[2rem] max-lg:flex max-lg:justify-center max-lg:items-center max-lg:mt-20">
      <div className="inner flex flex-col w-[100%] max-w-[600px]">
        <h1 className="font-bold text-xl mb-4 lg:text-start text-center">
          Days forecast
        </h1>

        <div className="daysdiv pb-[6rem] overflow-auto">
          {!data ? (
            <h1>Loading...</h1>
          ) : (
            data.slice(0, 5).map((days, index) => {
              return (
                <div className="daycast w-full py-4" key={index}>
                  <div className="castbox flex lg:gap-8 md:gap-20 gap-8 w-full lg:justify-start justify-between items-center">
                    <Cloud style={{ height: "40px", width: "40px" }} />
                    <div className="date flex flex-col ml-4">
                      <span className="text-xl">{fetchday(days.datetime)}</span>
                      <span className="text-xl">{days.datetime}</span>
                      <span className="preciptype font-bold text-xl">
                        {days.conditions}
                      </span>
                    </div>
                    <span className="temp text-3xl lg:ml-auto">
                      {days.temp}°
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        <HourForcast datas={hourData} />
      </div>
    </Wrapper>
  );
}

export default DaysForcast;

const Wrapper = styled.section`
  overflow-y: overlay;
  backdrop-filter: blur(10px);

  @media (max-width: 1024px) {
    &::before {
      content: "";
      position: absolute;
      top: 1px;
      left: 30%;
      width: 40%;
      height: 4px;
      background-color: rgba(255, 255, 255, 1);
    }
  }

  .daycast {
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);
  }

  .daysdiv {
    border-bottom: 2px solid rgba(255, 255, 255, 1);
  }
`;
