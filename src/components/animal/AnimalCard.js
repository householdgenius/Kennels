import React from 'react';
import "./Animal.css";
import { Link } from 'react-router-dom';
export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    return (
        <div className="card">
            <div className="card-content">
                {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
                <h3><span className="card-petname">
                    {animal.name}
                </span></h3>
                {/* <p>Breed: {animal.breed}</p> */}
                <Link to={`/animals/${animal.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
            </div>
        </div>
    );
}