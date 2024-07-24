import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeatherData } from "../../store/slices/WeatherdataSlice";
import { Cloud } from "@mui/icons-material";
import WeatherDetail from "../WeatherDetail/WeatherDetail";

function locationdate() {
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

  const chnageAddress = ()=>{
    // Umra, Surat, GJ, India
    // Ahemdabad Kasora, Bilari, UP, India

    const address = data.resolvedAddress.split(',');
    const local = address[0].split(' ')[0]
    const city = address[1];
    const state = address[2];
    const country = address.at(-1);
    
    console.log(local);

    if(address.length === 3){
      console.log(`${local}, ${city}, ${state}`);
      const newaddress = `${local}, ${city}, ${state}`
      return newaddress;
    }else{
      console.log(`${local}, ${city}, ${state}, ${country}`)
      const newaddress = `${local}, ${city}, ${state}, ${country}`
      return newaddress;
    }
  //  console.log("local=",local," city=",city," state=",state," country=",country);
  }
  if(!data.resolvedAddress){

  }else{
    var newadress = chnageAddress();
  }

  return (
    <>
      <div className="locationdate-container w-full max-w-[60%]">
        <div className="inner flex justify-center gap-6 items-end mt-20 relative">
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
            <span className="text-3xl w-[250px] text-wrap">{newadress}</span>
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
          <span className="text-center absolute left-[7.5rem] bottom-[-2rem] text-lg">
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
