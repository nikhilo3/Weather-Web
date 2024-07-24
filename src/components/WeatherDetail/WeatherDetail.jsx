import React from "react";
import styled from "styled-components";

function WeatherDetail({ data }) {
  console.log("weather data detail =", data);

  // if (!data || !data.currentConditions) {
  //   return <p>Loading...</p>;
  // }
  return (
    <>
      <Wrapper>
        <div className="weather-detail-container p-6 rounded-lg shadow-lg ml-8 mt-12">
          <div className="details-grid grid grid-cols-2 gap-4">
            <div className="detail-box rounded-lg ">
              <h3 className="text-lg font-semibold mb-2">Sunrise</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" : data.currentConditions.sunrise}</p>
            </div>
            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">Sunset</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.sunset}</p>
            </div>
            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">UV Index</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.uvindex}</p>
            </div>
            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">Humidity %</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.humidity}</p>
            </div>
            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">Pressure mbar</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.pressure}</p>
            </div>

            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">windspeed</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.windspeed}</p>
            </div>

            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">conditions</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.conditions}</p>
            </div>

            <div className="detail-box">
              <h3 className="text-lg font-semibold mb-2">dew</h3>
              <p className="text-xl">{!data || !data.currentConditions? "Loading" :data.currentConditions.dew}</p>
            </div>

            <div className="detail-box col-span-2">
              <h3 className="text-lg font-semibold mb-2">Description</h3>
              <p className="text-xl">{!data || !data.currentConditions  ? "Loading" :data.description}</p>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}

export default WeatherDetail;

const Wrapper = styled.section`
  width: 85%;

  .weather-detail-container {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .detail-box {
    border-radius: 8px;
    padding: 9px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
