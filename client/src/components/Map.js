import React from "react";
import "../styles/Map.css";

export default function Map(props) {
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
