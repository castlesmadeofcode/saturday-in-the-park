import React, { useState, useEffect } from "react";
//import the components we will need
import ParkAreaCard from "./ParkAreaCard";
import ParkAreaManager from "../../modules/ParkAreaManager";

const ParkAreaList = (props) => {
  // The initial state is an empty array
  //setParkAreas is used to change the state of parkareas
  const [parkareas, setParkAreas] = useState([]);

  const getParkAreas = () => {
    // After the data comes back from the API, we
    //  use the setParkAreas function to update state
    return ParkAreaManager.getAll().then((parkareasFromAPI) => {
      setParkAreas(parkareasFromAPI);
    });
  };

  useEffect(() => {
    getParkAreas();
  }, []);

  return (
    <>
      <div className="container-cards">
        {parkareas.map((parkarea) => (
          <ParkAreaCard key={parkarea.id} parkarea={parkarea} {...props} />
        ))}
      </div>
    </>
  );
};
export default ParkAreaList;
