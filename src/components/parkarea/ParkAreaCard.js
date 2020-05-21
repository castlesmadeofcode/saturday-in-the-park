import React from "react";
import { Link } from "react-router-dom";

const ParkAreaCard = (props) => {
  // console.log(props);
  return (
    <div className="card">
      <div className="card-content">
        <h3>
          Name: <span className="card-parkareaname">{props.parkarea.name}</span>
        </h3>

        <p>Theme: {props.parkarea.theme}</p>
        <h3>Attractions:</h3>
        <ul>
          {props.parkarea.attractions.map((attraction) => (
            <li key={attraction.name} attraction={attraction} {...props}>
              {attraction.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ParkAreaCard;
