import React from "react";
import "../styles/Map.css";

export default function Map() {
  return (
      <iframe
        className="google-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1698862.63706548!2d-113.02528221328376!3d33.73246065571182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b73b0942b05eb%3A0xc4ec9b1c5630b985!2sREI!5e0!3m2!1sen!2sus!4v1705522979273!5m2!1sen!2sus"
        // width="600"
        // height="450"
        // style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google-Maps"
      ></iframe>
  );
}
