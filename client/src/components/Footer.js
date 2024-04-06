import React from "react";

export default function Footer() {
  return (
    <footer class="bg-dark text-center text-white mt-5 fixed-bottom">
      <div class="container p-4">
        <section class="mb-4">
          <div class="container">
            <div class="row gx-5 ">
              <div class="col-md-6">
                <h5>About REI</h5>
                <p>
                  REI is an outdoor retail co-op dedicated to inspiring,
                  educating, and outfitting its members and the community for a
                  lifetime of outdoor adventure and stewardship.
                </p>
              </div>

              <div class="col-md-6">
                <h5>Contact Us</h5>
                <p>
                  Email: info@rei.com <br />
                  Phone: 1-800-426-4840 <br />
                  Address: 6750 S. 228th St., Kent, WA 98032
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
