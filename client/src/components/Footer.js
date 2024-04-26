import React from "react";
import { name } from "tar/lib/types";

export default function Footer() {
    
  const links = [
    {name: 'Terms of Use', link:"https://www.rei.com/legal/terms-of-use"},
    {name: 'Privacy Policy', link:"https://www.rei.com/legal/privacy-policy"},	
    {name: 'Cookie Policy', link:"https://www.rei.com/legal/us-state-privacy-notice"},
    {name: 'Product Recall', link:"https://www.rei.com/help/product-safety-and-recalls.html"},
    {name: 'REI Accessibility Statement', link:"https://www.rei.com/accessibility"},
  ]

  return (
    
<footer class="bg-dark text-white mt-5">
  <div class="container p-4">

    <section class="mb-4 text-white">

      <div className="row text-left mt-4">
        <div className="col"><h5 className="mb-3">Who we are At REI</h5> we believe that a life outdoors is a life well lived. We've been sharing our passion for the outdoors since 1938. Read our story</div>
        <div className="col"><h5 className="mb-3">Become an REI Co-op Member</h5> Anyone can join and everyone belongs. Benefits include great gear offers, special pricing on events and an annual Co-op Member Reward—for life. Join once, enjoy forever. Join us</div>
        <div className="col"><h5 className="mb-3">Take a stand </h5>Outdoor equity, climate action, places we love. Raise your voice in the movement to protect and share life outdoors. REI Cooperative Action Network</div>
        <div className="col"><h5 className="mb-3">Apply for the REI Co-op® Mastercard®</h5> Earn a $100 REI gift card after your first purchase outside of REI within 60 days from account opening. Details | Manage your card</div>
      </div>

      <br></br>
      <hr></hr>
      <br></br>

      <p className="text-center">
      © 2024 Recreational Equipment, Inc. All rights reserved. REI and the REI Co-op logo are trademarks of Recreational Equipment, Inc.
      </p>
      <div className="row text-center">

        <div className="col-sm">&nbsp;</div>
          <div className="col-lg">
            {
              links.map(link => (
                <a href={link.link} class="text-white me-4">{link.name}</a>
              ))
            }
          </div>
        <div className="col-sm">&nbsp;</div>

      </div>

    </section>

  </div>
</footer>

  );
}
