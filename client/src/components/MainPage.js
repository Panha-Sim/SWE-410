import React, { useState } from "react";

import "../styles/MainPage.css";

import Map from "./Map";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MapListGroup from "./MapListGroup";
import MockLocationData from '../MockData/MockLocationData.json';


const MainPage = () => {

  const [activeAddress, setActiveAddress] = useState(null);
  const [REIMapLink, setREIMapLink] = useState(MockLocationData.Location[0].link);

  const handleClick = (address, link)=>{
    setActiveAddress(address);
    setREIMapLink(link);
    console.log(link)

  }

  return (

    <div className="main-container">

      <NavBar />

      <header>REI Store Locator</header>
      

      <div className="container">

        <div class="row gx-5 ">
          <div class="col-md-6">

            {/* =========MAP==========   */}
            <div class="list-group">
              {
                MockLocationData.Location.map(location => (
                  <MapListGroup active={location.address === activeAddress}
                                onClick = {()=>handleClick(location.address, location.link)}
                                address = {location.address}
                                hour = {location.hour}
                                phone = {location.phone}
                                />
                ))
              }
            </div>
            {/* =======END MAP======== */}

          </div>

          <div class="col-md-6">
            <Map link={REIMapLink}/>
          </div>

        </div>

      </div>

      <Footer />

    </div>

  );
};

export default MainPage;
