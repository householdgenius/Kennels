const remoteURL = "http://localhost:5002"

export const getEmployeeById = (EmployeeId) => {
    return fetch(`${remoteURL}/employees/${EmployeeId}?_expand=location`)
    .then(res => res.json())
}

export const getAllEmployees = () => {
    return fetch(`${remoteURL}/employees`) 
    .then(res => res.json())
}