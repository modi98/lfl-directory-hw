const addEmployee = function () {
  const name = document.getElementById('nameInput').value;
  const officeNum = document.getElementById('officeNumInput').value;
  const phoneNum = document.getElementById('phoneNumInput').value;

  employeeList.push({
    name,
    officeNum,
    phoneNum
  })
  loadEmployees(employeeList);
  resetForm();
};

const resetForm = function () {
  document.getElementById('nameInput').value = '';
  document.getElementById('officeNumInput').value = '';
  document.getElementById('phoneNumInput').value = '';
};

window.onload = function () {
  loadNav();
  loadEmployees(employeeList);
};