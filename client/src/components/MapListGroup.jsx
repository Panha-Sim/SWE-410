import { useState, useEffect } from "react";

import "../styles/MapListGroup.css";


export default function ListGroup(props) {
  const [isMatched, setIsMatched] = useState(true);

  useEffect(() => {
    const checkMatch = () => {
      const searchQuery = (props.searchQuery || "").toLowerCase();
      const address = (props.address || "").toLowerCase();
      setIsMatched(address.includes(searchQuery));
    };
    checkMatch();
  }, [props.searchQuery, props.address]);

  if (!isMatched) {
    return null;
  }

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
