const updateData = function () {
  const name = document.getElementById('nameInputUpdate').value;
  const officeNum = document.getElementById('officeNumInputUpdate').value;
  const phoneNum = document.getElementById('phoneNumInputUpdate').value;

  if (!name || !officeNum || !phoneNum) {
    document.getElementById('errorMessage').innerHTML = 'Verify the data provided';
  } else if (verifyEmployee(name)) {
    updateEmployee({name, officeNum, phoneNum});
    loadEmployees(employeeList);
    clearInputUpdate();
    document.getElementById('errorMessage').innerHTML = '';
  } else {
    document.getElementById('errorMessage').innerHTML = `${name} doesn't exist.`;
  }
};

const clearInputUpdate = function () {
  document.getElementById('nameInput').value = '';
  document.getElementById('officeNumInput').value = '';
  document.getElementById('phoneNumInput').value = '';
};