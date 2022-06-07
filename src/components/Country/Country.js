import React from "react";
import "./Country.css";

const Country = (props) => {
  return (
    <div className="country">
      <h1>{props.name}</h1>
      <p>Capital: {props.capital}</p>
      <p>Population: {props.population}</p>
    </div>
  );
};

export default Country;
