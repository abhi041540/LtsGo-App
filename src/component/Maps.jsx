import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { feature } from 'topojson-client';

const topoJsonUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json';

const Maps = ({ location }) => {
  const [geographies, setGeographies] = useState([]);

  useEffect(() => {
    fetch(topoJsonUrl)
      .then((response) => response.json())
      .then((worldData) => {
        setGeographies(feature(worldData, worldData.objects.countries).features);
      });
  }, []);

  return (
    <ComposableMap>
      <Geographies geography={geographies}>
      {({ geographies }) =>
        geographies.map(geo => (
          <Geography
            key={geo.rms}
            geography={geo}
            style={{
              default: {
                fill: "rgb(206, 177, 105)",
                stroke: "gray",
                strokeWidth: 0.75,
                outline: "none",
              },
              hover: {
                fill: "#F53",
                stroke: "#D6D6DA",
                strokeWidth: 0.75,
                outline: "none",
              },
              pressed: {
                fill: "#E42",
                stroke: "#D6D6DA",
                strokeWidth: 0.75,
                outline: "none",
              },
            }}
          />
        ))
      }

      </Geographies>
      <Marker coordinates={location}>
      <g
        fill="rgb(50, 27, 198)"
        stroke="rgb(50, 27, 198)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(-10, -22)"
      >
        <circle cx="12" cy="10" r="3" />
        <path d="M12 21v-11"/>
      </g>

      </Marker>
    </ComposableMap>
  );
};

export default Maps;
