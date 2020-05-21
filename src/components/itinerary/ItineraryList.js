import React, { useState, useEffect } from "react";
//import the components we will need
import ItineraryCard from "./ItineraryCard";
import ItineraryManager from "../../modules/ItineraryManager";

const ItineraryList = (props) => {
  // The initial state is an empty array
  //setItineraries is used to change the state of itineraries
  const [itineraries, setItineraries] = useState([]);

  const getItineraries = () => {
    // After the data comes back from the API, we
    //  use the setItineraries function to update state
    return ItineraryManager.getAll().then((itinerariesFromAPI) => {
      setItineraries(itinerariesFromAPI);
    });
  };

  useEffect(() => {
    getItineraries();
  }, []);

  console.log(itineraries);

  return (
    <>
      <div className="container-cards">
        {itineraries.map((itinerary) => (
          <ItineraryCard key={itinerary.id} itinerary={itinerary} {...props} />
        ))}
      </div>
    </>
  );
};
export default ItineraryList;
