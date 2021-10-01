import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
// import {LocationCard} from "./location/Location"
// import {CustomerCard} from "./customer/Customer"
// import {EmployeeCard} from "./employee/Employee"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import {AnimalDetail} from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail"
import {CustomerDetail} from "./customer/CustomerDetail";
import {EmployeeDetail }from "./employee/EmployeeDetail";
export const ApplicationViews = () => {
  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        <AnimalList />
      </Route>

      <Route path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>

      {/* Render the animal list when http://localhost:3000/locations */}
      <Route exact path="/locations">
        <LocationList />
      </Route>

      <Route path="/locations/:locationId(\d+)">
        <LocationDetail />
      </Route>

      {/* Render the animal list when http://localhost:3000/customers */}
      <Route exact path="/customers">
        <CustomerList />
      </Route>

      
<Route path="/customers/:customerId(\d+)">
  <CustomerDetail />
</Route>

      {/* Render the animal list when http://localhost:3000/employees */}
      <Route exact path="/employees">
        <EmployeeList />
      </Route>

      <Route path="/employees/:employeeId(\d+)">
  <EmployeeDetail />
</Route>



    </>
  )
}