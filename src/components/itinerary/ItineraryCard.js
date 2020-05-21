import React from "react";

const ItineraryCard = (props) => {
  // console.log(props);
  return (
    <div className="card">
      <div className="card-content">
        <h3>Start Time:</h3>
        <p>
          <span className="card-itineraryname">
            {props.itinerary.starttime} PM
          </span>
        </p>
        <h3>Park Area:</h3>
        {props.itinerary.attraction.area.name}
        <h3>Theme:</h3>
        <p>{props.itinerary.attraction.area.theme}</p>
        <h3>Attractions:</h3>
        <ul>
          <li>{props.itinerary.attraction.name}</li>
        </ul>
      </div>
    </div>
  );
};

export default ItineraryCard;
