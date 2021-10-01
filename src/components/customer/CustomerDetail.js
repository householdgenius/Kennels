import React, { useState, useEffect } from 'react';
import { getCustomerById, deleteCustomer} from '../../modules/CustomerManager';
import './CustomerDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const CustomerDetail = () => {
    const [customer, setCustomer] = useState({ name: "", address: "", phone:"", animal: "" });
    const [isLoading, setIsLoading] = useState(true);
    const {customerId} = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", customerId)
        getCustomerById(customerId)
          .then(customer => {
            setCustomer({
              name: customer.name,
              address: customer.address,
              phone: customer.phone,
              animal: customer.animal.name
            });
            setIsLoading(false);
          });
      }, [customerId]);

      const handleDelete = () => {
        //invoke the delete function in AnimalManger and re-direct to the animal list.
        setIsLoading(true);
        deleteCustomer(customerId).then(() =>
          history.push("/customers")
        );
      };

      return (
        <section className="customer">
          <h3 className="customer__name">Name: {customer.name}</h3>
          <div className="customer__address">Address: {customer.address}</div>
          {/* What's up with the question mark???? See below.*/}
          <div className="customer__phone">Phone: {customer.phone}</div>
          <div className="customer__animal">Animal: {customer.animal}</div>
          <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete Account
        </button>
        </section>
      );
    }