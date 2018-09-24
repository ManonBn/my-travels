// src/travel.js

import React from "react";

const Travel = ({ destination, country, photo, distance }) => (
  <figure>
    <img src={photo} alt={country} />
    <figcaption>
      <blockquote>{destination}</blockquote>
      <cite>{distance}</cite>
      <cite>{country}</cite>
    </figcaption>
  </figure>
);

export default Travel;