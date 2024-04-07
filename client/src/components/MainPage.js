import React, { useState, useEffect } from "react";

import "../styles/Admin.css";

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
  const [locations, setLocations] = useState(MockLocationData.Location);

  useEffect(() => {
    // Load locations from local storage or mock data on initial render
    const storedLocations = JSON.parse(localStorage.getItem("locations"));
    if (storedLocations) {
      setLocations(storedLocations);
    } else {
      setLocations(MockLocationData.Location);
    }
  }, []);

  const handleClick = (address, link) => {
    setActiveAddress(address);
    setREIMapLink(link);
    console.log(link);
  };

  return (
    // =========== START OF MAIN PAGE ===========
    <div className="main-container" style={{ overflowY: 'auto', maxHeight:'calc(100vh - 250px)'}}>
      {/* =========== NAVBAR =========== */}
      <NavBar />

      <header>REI Store Locator</header>

      {/* =========== MAIN COMPONENTS BETWEEN HEADER AND FOOTER =========== */}

      <div className="container">
        <div class="row gx-5 ">
          <div class="col-md-6">
            {/* =========== LOCATION LIST SEARCH BAR =========== */}
            <div className="form-outline-container">
              <div class="form-outline mb-3" data-mdb-input-init>
                <input
                  type="search"
                  id="form1"
                  class="form-control"
                  placeholder="Enter Location Address"
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {/* ========= MAP LOCATIONS ==========   */}
            <div className="list-group-container">
              <div className="list-group">
                {locations.map((location) => (
                  <MapListGroup
                    key={location.address}
                    active={location.address === activeAddress}
                    onClick={() => handleClick(location.address, location.link)}
                    address={location.address}
                    hour={location.hour}
                    phone={location.phone}
                    searchQuery={searchQuery}
                  />
                ))}
              </div>
            </div>

            {/* ======= END MAP ======== */}
          </div>

          <div class="col-md-6">
            <Map link={REIMapLink} />
          </div>
        </div>

        {/* Space underneath both columns */}
        <div className="admin-container">
        <div className="col">
            
          </div>
        </div>
      </div>

      {/* =========== FOOTER =========== */}
      <Footer />
    </div>
  );
};

export default MainPage;
