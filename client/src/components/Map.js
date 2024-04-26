import React from "react";
import "../styles/Map.css";

export default function Map(props) {

  // ===== Start of Google Map Display utilizing a location prop =====
  return (
      <iframe
        className="google-map"
        src={props.link}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google-Maps"
      ></iframe>
  );
}
