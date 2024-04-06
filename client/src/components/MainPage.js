import React, { useState } from "react";

import "../styles/MainPage.css";

// =========== PAGE COMPONENTS ===========
import Map from "./Map";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MapListGroup from "./MapListGroup";
import MockLocationData from "../MockData/MockLocationData.json";

const MainPage = () => {
  const [activeAddress, setActiveAddress] = useState(null);
  const [REIMapLink, setREIMapLink] = useState(
    MockLocationData.Location[0].link
  );

  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (address, link) => {
    setActiveAddress(address);
    setREIMapLink(link);
    console.log(link);
  };

  return (
    // =========== START OF MAIN PAGE ===========
    <div className="main-container">
      {/* =========== NAVBAR =========== */}
      <NavBar />

      <header>REI Store Locator</header>

      {/* =========== MAIN COMPONENTS BETWEEN HEADER AND FOOTER =========== */}

      <div className="container">
        <div class="row gx-5 ">
          <div class="col-md-6">

            {/* =========== LOCATION LIST SEARCH BAR =========== */}
            <div className="container">
              <div className="input-group rounded mt-3 mb-3">
                <input
                  type="search"
                  className="form-control rounded"
                  placeholder="Search"
                  aria-label="Search"
                  aria-describedby="search-addon"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <span className="input-group-text border-0" id="search-addon">
                  <i className="fas fa-search"></i>
                </span>
              </div>
            </div>

            {/* ========= MAP LOCATIONS ==========   */}
            <div class="list-group">
              {MockLocationData.Location.map((location) => (
                <MapListGroup
                  active={location.address === activeAddress}
                  onClick={() => handleClick(location.address, location.link)}
                  address={location.address}
                  hour={location.hour}
                  phone={location.phone}
                  searchQuery={searchQuery}
                />
              ))}
            </div>
            {/* ======= END MAP ======== */}
          </div>

          <div class="col-md-6">
            <Map link={REIMapLink} />
          </div>
        </div>
      </div>

      {/* =========== FOOTER =========== */}
      <Footer />
    </div>
  );
};

export default MainPage;
