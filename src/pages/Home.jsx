import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Main from '../components/main/Main'

function Home() {
  const [isCurrentLocation, setIsCurrentLocation] = useState(false);

  return (
    <>
        <Navbar setIsCurrentLocation={setIsCurrentLocation} isCurrentLocation={isCurrentLocation}/>
        <Main isCurrentLocation={isCurrentLocation}/>
    </>
  )
}

export default Home