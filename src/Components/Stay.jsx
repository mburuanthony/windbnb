import React from "react";
import "../assets/Items.css";

function Stay({
  city,
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
}) {
  return (
    <div className="stay">
      <img src={photo} alt="" />

      <div className="details">
        <p
          style={
            superHost
              ? {
                  display: "block",
                  width: "fit-content",
                  height: "fit-content",
                  padding: "4px",
                  borderRadius: "12px",
                  border: "1px solid #4F4F4F",
                  fontSize: "12px",
                  textTransform: "uppercase",
                  textAlign: "center",
                  fontWeight: "bold",
                }
              : { display: "none" }
          }
        >
          super host
        </p>
        <p style={{ color: "#828282", fontSize: "14px", fontWeight: "500px" }}>
          {type} . {beds} beds
        </p>
        <p style={{ color: "#4F4F4F", fontWeight: "500px" }}>
          <i className="fas fa-star" style={{ color: "#EB5757" }}></i>a &nbsp;
          {rating}
        </p>
      </div>
      <p style={{ color: "#333333", fontSize: "16px", fontWeight: "600px" }}>
        {title}
      </p>
    </div>
  );
}

export default Stay;
