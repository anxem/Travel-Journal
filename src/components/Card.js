import React from "react";

export default function Card(props) {
  return (
    <div className="card">
      <img src={`${props.imageUrl}`} alt="dp" />

      <div className="details--box">
        <div className="location">
          <img src="../images/map-icon.png" alt="map icon" />
          <h4>{props.location}</h4>
          <a href={props.googleMapUrl}>View on Google Maps</a>
        </div>

        <h2 className="place--visited">{props.title}</h2>

        <h5 className="date--visited">{`${props.startDate} - ${props.endDate}`}</h5>

        <p>{props.description}</p>
      </div>
    </div>
  );
}
