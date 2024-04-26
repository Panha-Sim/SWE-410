import React, { useState, useEffect } from "react";

import "../styles/Admin.css";

// =========== PAGE COMPONENTS ===========
import Map from "./Map";
import NavBar from "./NavBar";
import Footer from "./Footer";
import MapListGroup from "./MapListGroup";
import MockLocationData from "../MockData/MockLocationData.json";

const MainPage = () => {

  // use states for each data handler
  const [activeAddress, setActiveAddress] = useState(null);
  const [REIMapLink, setREIMapLink] = useState(
    MockLocationData.Location[0].link
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [locations, setLocations] = useState(MockLocationData.Location);

  // loads mock data to local storage
  useEffect(() => {
    // Load locations from local storage when the page is rendered
    const storedLocations = JSON.parse(localStorage.getItem("locations"));
    if (storedLocations) {
      setLocations(storedLocations);
    } else {
      setLocations(MockLocationData.Location);
    }
  }, []);

  // updates map when a location is clicked on
  const handleClick = (address, link) => {
    setActiveAddress(address);
    setREIMapLink(link);
    console.log(link);
  };

  // submits newly created locations to local storage so that they are carried over between pages and refreshes
  const handleSubmit = (e) => {
    e.preventDefault();
    const address = e.target.address.value.trim();
    const hour = e.target.hours.value.trim();
    const phone = e.target.phone.value.trim();

    // Check if any of the fields are empty
    if (!address || !hour || !phone) {
      alert("Please fill out all fields.");
      return;
    }

    const newLocation = {
      address: address,
      hour: hour,
      phone: phone,
      link: "",
    };

    // updates list of locations when a new location is created
    const updatedLocations = [...locations, newLocation];
    setLocations(updatedLocations);
    // Save to local storage
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
    e.target.reset();
  };

  // handles the deletion of locations from local storage
  const handleDelete = (addressToDelete) => {
    // Prompts the user for confirmation before deleting a location
    const confirmation = window.confirm("Are you sure you want to delete this location?");
    if (!confirmation) {
      return;
    }
  
    // Filter out the location to delete
    const updatedLocations = locations.filter(
      (location) => location.address !== addressToDelete
    );
    // Update state and local storage
    setLocations(updatedLocations);
    localStorage.setItem("locations", JSON.stringify(updatedLocations));
  };

  return (
    // =========== START OF MAIN PAGE ===========
    <div
      className="main-container"
      style={{ overflowY: "auto", maxHeight: "calc(100vh - 250px)" }}
    >
      {/* =========== NAVBAR =========== */}
      <NavBar />

      <header>REI Location's Admin</header>

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
                  <div
                    className="d-flex justify-content-between"
                    key={location.address}
                  >
                    <MapListGroup
                      active={location.address === activeAddress}
                      onClick={() =>
                        handleClick(location.address, location.link)
                      }
                      address={location.address}
                      hour={location.hour}
                      phone={location.phone}
                      searchQuery={searchQuery}
                    />
                    {/* ===== DELETE BUTTON ===== */}
                    <button
                      className="btn btn-danger delete-button"
                      onClick={() => handleDelete(location.address)}
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* ======= END OF MAP LOCATIONS ======== */}
          </div>

          <div class="col-md-6">
            <Map link={REIMapLink} />
          </div>
        </div>

        {/* Admin Input Form */}
        <div className="admin-container">
          <div className="col">
            <div className="container-fluid bg-light p-4">
              <h2>Add Location</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="address" className="form-label">
                    Location Address
                  </label>
                  <input type="text" className="form-control" id="address" />
                </div>
                <div className="mb-3">
                  <label htmlFor="hours" className="form-label">
                    Hours
                  </label>
                  <input type="text" className="form-control" id="hours" />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input type="text" className="form-control" id="phone" />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* =========== FOOTER =========== */}
      <Footer />
    </div>
  );
};

export default MainPage;
