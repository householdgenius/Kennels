import React from "react"
import "./Employee.css"
import { Link } from "react-router-dom";

export const EmployeeCard = ({ employee, handleDeleteEmployee }) => {
    return (
        <div className="card">
            <div className="card-content">
                {/* <picture>
            <img src={require('./dog.svg')} alt="My Dog" />
          </picture> */}
                <h3><span className="card-employeename">
                    {employee.name}
                </span></h3>
                <Link to={`/employees/${employee.id}`}>
                    <button>Details</button>
                </Link>
                <button type="button" onClick={() => handleDeleteEmployee(employee.id)}>Terminate Employee</button>
            </div>
        </div>
    );
}