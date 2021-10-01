import React, { useState, useEffect } from 'react';
import { getLocationById, deleteLocation } from '../../modules/LocationManager';
import './LocationDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const [location, setLocation] = useState({ name: "", address: "", phone:"" });
    const [isLoading, setIsLoading] = useState(true);

const {locationId} = useParams();
  const history = useHistory();

  useEffect(() => {
    console.log("useEffect", locationId)
    getLocationById(locationId)
      .then(location => {
        setLocation({
          name: location.name,
          address: location.address,
          phone: location.phone
        });
        setIsLoading(false);
      });
  }, [locationId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteLocation(locationId).then(() =>
      history.push("/locations")
    );
  };

  return (
    <section className="location">
      <h3 className="location__name">Location: {location.name}</h3>
      <div className="location__address">Address: {location.address}</div>
      <div className="location__phone">Phone: {location.phone}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Close Location
        </button>
    </section>
  );
}