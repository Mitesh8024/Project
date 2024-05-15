import React from "react";
import "./CarCard.css";

const CarCard = ({ car, onBook }) => {
  return (
    <div className="car-card">
      <img
        src={car.image}
        alt={`${car.make} ${car.model}`}
        className="car-image"/>
      <div className="car-details">
        <h2>
          {car.make} {car.model}
        </h2>
        <p>Year: {car.year}</p>
        <p>Price: ${car.price}</p>
        <button className="book-button" onClick={() => onBook(car)}>Book Now</button>
      </div>
    </div>
  )
};

export default CarCard;
