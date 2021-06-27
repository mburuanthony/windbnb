import React from "react";
import Stay from "./Stay";
import "../assets/Items.css";

function Stays({ stays }) {
  return (
    <div className="Stays">
      {stays.map((stay) => (
        <Stay
          key={Math.floor(Math.random() * 1000)}
          city={stay.city}
          superHost={stay.superHost}
          title={stay.title}
          rating={stay.rating}
          maxGuests={stay.maxGuests}
          type={stay.type}
          beds={stay.beds}
          photo={stay.photo}
        />
      ))}
    </div>
  );
}

export default Stays;
