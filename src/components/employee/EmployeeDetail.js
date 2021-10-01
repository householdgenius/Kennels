import React, { useState, useEffect } from 'react';
import { getEmployeeById } from '../../modules/EmployeeManager';
import './EmployeeDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", location: "" });

  const {employeeId} = useParams();
  const history = useHistory();

  useEffect(() => {
    //getEmployeeById(id) from EmployeeManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          location: employee.location
        });
      });
  }, [employeeId]);

  return (
    <section className="employee">
      <h3 className="employee__name">Name: {employee.name}</h3>
      <div className="employee__location">Location: {employee.location}</div>
    </section>
  );
}