import React, { useState } from "react";
import "../assets/Search.css";
import logo from "../assets/logo.png";

function Search() {
  const [search, Setsearch] = useState("Helsinki, Finland");

  const shoPreview = () => {
    document.querySelector(".preview").style.display = "block";
    document.querySelector("#search-stays").style.display = "none";
  };

  const hidePreview = () => {
    document.querySelector(".preview").style.display = "none";
    document.querySelector("#search-stays").style.display = "block";
  };

  return (
    <div>
      <div id="search-stays">
        <img src={logo} className="logo" alt="" />

        <form action="#">
          <input
            type="text"
            name="search"
            autoComplete="off"
            value={search}
            onChange={(e) => {
              Setsearch([e.target.value]);
            }}
            onClick={shoPreview}
          />
          <button type="button" onClick={shoPreview}>
            Add guests
          </button>
          <i
            className="fas fa-search"
            style={{
              color: "#EB5757",
              padding: "0 6px",
              fontSize: "18px",
              cursor: "pointer",
            }}
          ></i>
        </form>
      </div>

      <div className="preview">
        <p
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Filter your search
          <span
            style={{
              float: "right",
              color: "#333333",
              fontSize: "30px",
              cursor: "pointer",
              padding: "0",
            }}
            onClick={hidePreview}
          >
            &times;
          </span>
        </p>
        <form action="#">
          <div id="location">
            <label>LOCATION</label>
            <input type="text" value="Helsinki, Finland" />
          </div>

          <div id="guest">
            <label>GUESTS</label>
            <input type="text" placeholder="Add guests" />
          </div>
          <button type="button">
            <i className="fas fa-search"></i>
            Search
          </button>
        </form>

        <div className="locations">
          <p>
            <i className="fas fa-map-marker-alt"></i> Helsinki, Finland
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Turku, Finland
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Oulu, Finland
          </p>
          <p>
            <i className="fas fa-map-marker-alt"></i> Vaasa, Finland
          </p>
        </div>
      </div>
    </div>
  );
}

export default Search;
