const updateData = function () {
  const name = document.getElementById('nameInput').value;
  const officeNum = document.getElementById('officeNumInput').value;
  const phoneNum = document.getElementById('phoneNumInput').value;

  if (!name || !officeNum || !phoneNum) {
    document.getElementById('errorMessage').innerHTML = 'Verify the data provided';
  } else if (verifyEmployee(name)) {
    updateEmployee({name, officeNum, phoneNum});
    loadEmployees(employeeList);
    clearInput();
    document.getElementById('errorMessage').innerHTML = '';
  } else {
    document.getElementById('errorMessage').innerHTML = `${name} doesn't exist.`;
  }
};

const clearInput = function () {
  document.getElementById('nameInput').value = '';
  document.getElementById('officeNumInput').value = '';
  document.getElementById('phoneNumInput').value = '';
};

window.onload = function () {
  loadNav();
  loadEmployees(employeeList);
};