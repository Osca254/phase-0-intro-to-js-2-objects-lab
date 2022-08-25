// Write your solution in this file!
let employee ={
    name: 'Oscar',
    streetAddress :'Thika Road'
};
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employees = {...employee};
    employees[key]=value;
    return employees;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.name = 'Sam';
    employee.streetAddress = "12 Broadway";
    let employees = {...employee};
    employees[key] =value
    return employees;
}
function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = {...employee};
    delete newEmployee.name;
    delete newEmployee.streetAddress;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    let newEmployee = employee;
    delete newEmployee.name;
    delete newEmployee.streetAddress;
    return newEmployee;
}