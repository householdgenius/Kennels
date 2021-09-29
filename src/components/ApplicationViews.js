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

            {/* Render the animal list when http://localhost:3000/locations */}
            <Route exact path="/locations">
              <LocationList />
            </Route>

            {/* Render the animal list when http://localhost:3000/customers */}
            <Route exact path="/customers">
              <CustomerList />
            </Route>

             {/* Render the animal list when http://localhost:3000/employees */}
             <Route exact path="/employees">
              <EmployeeList/>
            </Route>

  
        </>
    )
}