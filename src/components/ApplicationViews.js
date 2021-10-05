import React, { useState } from "react"
import { Route, Redirect } from "react-router-dom"
import { Home } from "./Home"
// import { AnimalCard } from "./animal/AnimalCard"
// import {LocationCard} from "./location/Location"
// import {CustomerCard} from "./customer/Customer"
// import {EmployeeCard} from "./employee/Employee"
import { AnimalList } from "./animal/AnimalList"
import { LocationList } from "./location/LocationList"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { AnimalDetail } from "./animal/AnimalDetail";
import { LocationDetail } from "./location/LocationDetail"
import { CustomerDetail } from "./customer/CustomerDetail";
import { EmployeeDetail } from "./employee/EmployeeDetail";
import { AnimalForm } from './animal/AnimalForm'
import { CustomerForm } from './customer/CustomerForm'
import { EmployeeForm } from './employee/EmployeeForm'
import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import { AnimalEditForm } from "./animal/AnimalEditForm"
export const ApplicationViews = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(sessionStorage.getItem("kennel_customer") !== null)

  const setAuthUser = (user) => {
    sessionStorage.setItem("kennel_customer", JSON.stringify(user))
    setIsAuthenticated(sessionStorage.getItem("kennel_customer") !== null)
  }

  return (
    <>
      {/* Render the location list when http://localhost:3000/ */}
      <Route exact path="/">
        <Home />
      </Route>

      {/* Render the animal list when http://localhost:3000/animals */}
      <Route exact path="/animals">
        {isAuthenticated ? <AnimalList /> : <Redirect to="/login" />}
        <AnimalList />
      </Route>

      <Route exact path="/animals/:animalId(\d+)">
        <AnimalDetail />
      </Route>


      <Route path="/animals/create">
        <AnimalForm />
      </Route>

      <Route path="/animals/:animalId(\d+)/edit">
       {isAuthenticated ? <AnimalEditForm /> : <Redirect to="/login" />}
      </Route>

      <Route path="/login">
        <Login setAuthUser={setAuthUser} />
      </Route>

      <Route path="/register">
        <Register setAuthUser={setAuthUser} />
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

      <Route path="/customers/create">
        <CustomerForm />
      </Route>

      {/* Render the animal list when http://localhost:3000/employees */}
      <Route exact path="/employees">
        <EmployeeList />
      </Route>

      <Route path="/employees/:employeeId(\d+)">
        <EmployeeDetail />
      </Route>

      <Route path="/employees/create">
        <EmployeeForm />
      </Route>



    </>
  )
}