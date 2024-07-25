import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/slices/WeatherdataSlice";
import styled from "styled-components";
// import LocationDate from "./locationdatetime/LocationDate";

function Navbar({ setIsCurrentLocation, isCurrentLocation }) {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");
  // const [isCurrentLocation, setIsCurrentLocation] = useState(false);

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsCurrentLocation(false);

    if (location) {
      dispatch(fetchWeatherData(location));
      setIsCurrentLocation(false);
    }
  };

  const handlecurrentbtn = (e) => {
    e.preventDefault();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let longitude = position.coords.longitude;
        let latitude = position.coords.latitude;

        dispatch(fetchWeatherData(`${latitude},${longitude}`));
        setIsCurrentLocation(true);
      }, showError);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("allow location permission");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable.");
        break;
      case error.TIMEOUT:
        alert("The request to get user location timed out.");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occurred.");
        break;
    }
  }

  return (
    <>
      <div className="navcontainer flex items-end justify-between md:gap-4 gap-6 lg:p-4 p-2 lg:px-12">

          <h1 className="lg:text-3xl text-xl text-bold w-[80px] text-wrap">Weather Forecast</h1>

        <div className="searchbar w-[50%]  m-0 p-0 flex relative">
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Location"
              className="border-b-2 outline-none border-white w-full bg-transparent placeholder:text-gray-50"
              value={isCurrentLocation ? "Current Location" : location}
              onChange={handleInput}
            />
            <SearchButton className="absolute right-0" type="submit">
              <SearchIcon />
            </SearchButton>
          </form>
        </div>
        <button className="btncurrent md:py-[0.6rem] md:px-[1.5rem] py-2 px-[0.5rem] " onClick={handlecurrentbtn}>
          Current Location
        </button>
      </div>
    </>
  );
}

export default Navbar;

const SearchButton = styled.button`
  border-radius: 0;
  border: none;
  padding: 0;
  box-shadow: none;
  background: transparent;
  transition: none;
  cursor: pointer;
  outline: none;

  &:focus,
  &:focus-visible {
    outline: none;
  }
`;
