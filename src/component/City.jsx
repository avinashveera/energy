import React, { useState } from "react";
import cityData from  '../data';

const CityList = () => {
  const [expandedCity, setExpandedCity] = useState(null);

  const toggleCity = (city) => {
    setExpandedCity(expandedCity === city ? null : city);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1200px", margin: "0 auto" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Start your moving plan here
      </h2>
      <p style={{ textAlign: "center", marginBottom: "30px", color: "#555" }}>
        Find trusted packers and movers from our network of 10,000+ companies
        across India.
      </p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {cityData.map((city) => (
          <div
            key={city.name}
            style={{
              borderBottom: "1px solid #ccc",
              paddingBottom: "10px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
              onClick={() => toggleCity(city.name)}
            >
              <h3>{city.name}</h3>
              <span>{expandedCity === city.name ? "▲" : "▼"}</span>
            </div>
            <p>{city.categories.join(" | ")}</p>
            {expandedCity === city.name && city.links.length > 0 && (
              <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                {city.links.map((link, index) => (
                  <li key={index} style={{ marginBottom: "5px" }}>
                    <a
                      href={`#${link.replaceAll(" ", "-").toLowerCase()}`}
                      style={{ textDecoration: "none", color: "#007BFF" }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CityList;
