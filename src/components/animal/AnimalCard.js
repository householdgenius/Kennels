import React from 'react';
import "./Animal.css";
import { Link } from 'react-router-dom';
import { firstLetterCase } from '../../modules/helpers'
import { useHistory } from 'react-router';
export const AnimalCard = ({ animal, handleDeleteAnimal }) => {
    const history = useHistory();
    return (

        <div className="card">
            <div className="card-content">
                {/* <picture>
          <img src={require('./dog.svg')} alt="My Dog" />
        </picture> */}
                <h3><span className="card-petname">
                    {firstLetterCase(animal.name)}
                </span></h3>
                {/* <p>Breed: {animal.breed}</p> */}
                <Link to={`/animals/${animal.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => handleDeleteAnimal(animal.id)}>Discharge</button>
                <button type="button"
                    onClick={() => history.push(`/animals/${animal.id}/edit`)}>
                    Edit
                </button>
            </div>
        </div>
    );
}