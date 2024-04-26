import { useState, useEffect } from "react";

import "../styles/MapListGroup.css";

export default function ListGroup(props) {

  // state to check if the address matches the search query when a user searches
  const [isMatched, setIsMatched] = useState(true);

  useEffect(() => {

    // Function that checks if the address matches the search query
    const checkMatch = () => {
      // converts search query to lowercase
      const searchQuery = (props.searchQuery || "").toLowerCase();
      const address = (props.address || "").toLowerCase();
      // updates isMatched state based on search query and address
      setIsMatched(address.includes(searchQuery));
    };

    checkMatch();
  }, [props.searchQuery, props.address]);

  // does not render location if search query does not match a location
  if (!isMatched) {
    return null;
  }

  // Display the location and its information
  return (
    <a
      href="#"
      className={`list-group-item list-group-item-action ${
        props.active ? "active" : ""
      }`}
      aria-current="true"
      onClick={props.onClick}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{props.address}</h5>
      </div>
      <p className="mb-1">{props.hour}</p>
      <small>{props.phone}</small>
    </a>
  );
}
