import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, region, capital, population, flag } = props.country;
  return (
    <div className="country">
      <img src={flag} alt="" />
      <h1>{name}</h1>
      <p>Region: {region}</p>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
    </div>
  );
};

export default Country;
