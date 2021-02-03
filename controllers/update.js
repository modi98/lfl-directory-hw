const updateData = function () {
  const name = document.getElementById('nameInputUpdate').value;
  const officeNum = document.getElementById('officeNumInputUpdate').value;
  const phoneNum = document.getElementById('phoneNumInputUpdate').value;

  document.getElementById('errorMessageUpdate').innerHTML = '';
  
  if (!name || !officeNum || !phoneNum) {
    document.getElementById('errorMessageUpdate').innerHTML = 'Invalid input!';
  } else if (verifyEmployee(name)) {
    updateEmployee({name, officeNum, phoneNum});
    loadEmployees(employeeList);
    clearInputUpdate();
    document.getElementById('errorMessageUpdate').innerHTML = '';
  } else {
    document.getElementById('errorMessageUpdate').innerHTML = `${name} doesn't exist.`;
  }
};

const clearInputUpdate = function () {
  document.getElementById('nameInputUpdate').value = '';
  document.getElementById('officeNumInputUpdate').value = '';
  document.getElementById('phoneNumInputUpdate').value = '';
};