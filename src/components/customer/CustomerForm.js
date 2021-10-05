import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { addCustomer } from '../../modules/CustomerManager';
import { getAllLocations } from '../../modules/LocationManager';
import './CustomerForm.css'


export const CustomerForm = () => {
    // State will contain both animal data as well as an isLoading flag.
    // Define the initial state of the form inputs with useState()

    const [customer, setCustomer] = useState({
        name: "",
        locationId: 0,
    });

    const [isLoading, setIsLoading] = useState(false);

    // you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
    const [locations, setLocations] = useState([]);
   

    const history = useHistory();

    const handleControlledInputChange = (event) => {
        /* When changing a state object or array,
        always create a copy, make changes, and then set state.*/
        const newCustomer = { ...customer }
        let selectedVal = event.target.value
        // forms always provide values as strings. But we want to save the ids as numbers.
        if (event.target.id.includes("Id")) {
            selectedVal = parseInt(selectedVal)
        }
        /* Animal is an object with properties.
        Set the property to the new value
        using object bracket notation. */
        newCustomer[event.target.id] = selectedVal
        // update state
        setCustomer(newCustomer)
    }

    useEffect(() => {
        //load customer data and setState
        getAllLocations().then(locations => {
            setLocations(locations)
        })
    }, []);


    const handleClickSaveCustomer= (event) => {
        event.preventDefault() //Prevents the browser from submitting the form

        const locationId = customer.locationId
    
        if (locationId === 0 ) {
            window.alert("Please select a location ")
        } else {
            //invoke addAnimal passing animal as an argument.
            //once complete, change the url and display the animal list
            addCustomer(customer)
                .then(() => history.push("/customers"))
        }
    }

    return (
        <form className="customerForm">
            <h2 className="customerForm__title">New Customer</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="name">Customer name:</label>
                    <input type="text" id="name" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Customer name" value={customer.name} />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select value={customer.locationId} name="locationId" id="locationId" onChange={handleControlledInputChange} className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(l => (
                            <option key={l.id} value={l.id}>
                                {l.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button className="btn btn-primary"
                onClick={handleClickSaveCustomer}>
                Save Customer
            </button>
        </form>
    )
};