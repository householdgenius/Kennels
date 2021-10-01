import React, { useState, useEffect } from 'react';
import { getEmployeeById, deleteEmployee} from '../../modules/EmployeeManager';
import './EmployeeDetail.css';
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
  const [employee, setEmployee] = useState({ name: "", location: "" });

  const {employeeId} = useParams();
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //getEmployeeById(id) from EmployeeManager and hang on to the data; put it into state
    console.log("useEffect", employeeId)
    getEmployeeById(employeeId)
      .then(employee => {
        setEmployee({
          name: employee.name,
          location: employee.location
        });
        setIsLoading(false);
      });
  }, [employeeId]);

  const handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    setIsLoading(true);
    deleteEmployee(employeeId).then(() =>
      history.push("/employees")
    );
  };

  return (
    <section className="employee">
      <h3 className="employee__name">Name: {employee.name}</h3>
      <div className="employee__location">Location: {employee.location}</div>
      <button type="button" disabled={isLoading} onClick={handleDelete}>
          Terminate Employee
        </button>
    </section>
  );
}