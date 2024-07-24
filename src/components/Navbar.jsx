import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch } from "react-redux";
import { fetchWeatherData } from "../store/slices/WeatherdataSlice";
import styled from "styled-components";

function Navbar() {
  const dispatch = useDispatch();

  const [location, setLocation] = useState("");

  const handleInput = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location) {
      dispatch(fetchWeatherData(location));
    }
  };

  return (
    <>
      <div className="navcontainer flex items-end justify-between p-4 px-12">
        <div className="logo">
          <h1 className="">Weather Forecast</h1>
        </div>
        <div className="searchbar w-[40%] flex relative">
          <form action="" className="w-full" onSubmit={handleSubmit}>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search Location"
              className="border-b-2 border-solid outline-none border-white w-full bg-transparent placeholder:text-gray-50"
              value={location}
              onChange={handleInput}
            />
            <SearchButton className="absolute right-0" type="submit">
              <SearchIcon />
            </SearchButton>
          </form>
        </div>
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
