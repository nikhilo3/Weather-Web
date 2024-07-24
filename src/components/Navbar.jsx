import React from "react";
import SearchIcon from "@mui/icons-material/Search";

function Navbar() {
  return (
    <>
      <div className="navcontainer flex items-end justify-between p-4 px-12">
        <div className="logo">
          <h1 className="">Weather Forecast</h1>
        </div>
        <div className="searchbar w-[40%] flex relative">
          <input type="text" name="search" id="search"  placeholder="Search Location" className="border-b-2 border-solid outline-none border-white w-full bg-transparent placeholder:italic placeholder:text-gray-50"/>
          <SearchIcon className="absolute right-0"/>
        </div>
      </div>
    </>
  );
}

export default Navbar;
