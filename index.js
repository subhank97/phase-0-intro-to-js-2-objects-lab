const employee = {
    name: "Subi",
    streetAddress: "1439 Ocean Ave",
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    const upEmployee = {...obj};
    upEmployee[key] = value;
    return upEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){ 
    obj[key]= value;
    return obj;
}
function deleteFromEmployeeByKey(obj, key){
    const employee2 = {...obj}
    delete employee2[key]
    return employee2
}
function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key]
    return obj
}
