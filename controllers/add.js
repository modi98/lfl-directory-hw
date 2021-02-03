const addEmployee = function () {
  const name = document.getElementById('nameInput').value;
  const officeNum = document.getElementById('officeNumInput').value;
  const phoneNum = document.getElementById('phoneNumInput').value;
  document.getElementById('errorMessageAdd').innerHTML = '';

  if (!name || !officeNum || !phoneNum) {
    document.getElementById('errorMessageAdd').innerHTML = 'Invalid input!';
    return;
  }

  employeeList.push({
    name,
    officeNum,
    phoneNum
  });
  loadEmployees(employeeList);
  clearInputAdd();
};

const clearInputAdd = function () {
  document.getElementById('nameInput').value = '';
  document.getElementById('officeNumInput').value = '';
  document.getElementById('phoneNumInput').value = '';
};