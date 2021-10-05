import React, {useState, useEffect} from 'react';
import {CustomerCard} from "./Customer"
import { getAllCustomers, deleteCustomer } from '../../modules/CustomerManager';
import { useHistory } from 'react-router';

export const CustomerList = () => {
    const[customers, setCustomers] = useState([]);
    const history = useHistory();
    const getCustomers = () => {
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        })
    }

    const handleDeleteCustomer = id => {
        deleteCustomer(id)
        .then(() => getAllCustomers().then(setCustomers));
    };

    useEffect(() => {
getCustomers();
    }, []);

    return (
        <>
        <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {history.push("/customers/create")}}>
      Create Customer
  </button>
</section>
        <div className="container-cards">
          {customers.map(customer =><CustomerCard key={customer.id}customer={customer} handleDeleteCustomer={handleDeleteCustomer}/>)}
        </div>
        </>
    );
};