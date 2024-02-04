import React from "react";

import "../styles/MainPage.css";

import Map from "./Map";
import NavBar from "./NavBar";
import Footer from "./Footer";

const MainPage = () => {
  return (

    <div className="main-container">

      <NavBar />

        <header>REI Store Locator</header>
      

      <div class="container">

        <div class="row gx-5 ">
          <div class="col-md-6">
            <p1> This is where the map location stuff is going to go</p1>
          </div>

          <div class="col-md-6">
            <Map />
          </div>

        </div>

      </div>

      <Footer />

    </div>

  );
};

export default MainPage;
