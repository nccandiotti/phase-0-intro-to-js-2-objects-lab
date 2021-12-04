const employee = {
    name: 'Value 1',
    streetAddress: 'Value 2',
};

function updateEmployeeWithKeyAndValue(employee, name, streetAddress) {
    const newEmployee = { ...employee};
    newEmployee.name = 'Sam';
    newEmployee.streetAddress = '11 Broadway'
    return newEmployee; 
};
function destructivelyUpdateEmployeeWithKeyAndValue (employee) {
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
    };
 function deleteFromEmployeeByKey (employee, name) {
        const removeEmployee = { ...employee};
         delete removeEmployee.name;
         return removeEmployee;
    };
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
};

//function destructivelyDeleteFromEmployeeByKey