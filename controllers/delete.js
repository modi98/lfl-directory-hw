const deleteName = function () {
  const name = document.getElementById('nameInputDelete').value;
  document.getElementById('errorMessageDelete').innerHTML = '';
  if (!name) {
    document.getElementById('errorMessageDelete').innerHTML = 'Invalid input!';
    document.getElementById('deleteResult').innerHTML = 'Type a name to delete.';
  } else {
    deleteEmployee(name);
    loadEmployees(employeeList);
    clearInputDelete();
    document.getElementById('deleteResult').innerHTML = `${name} was successfully deleted.`;
  }
};

const clearInputDelete = function () {
  document.getElementById('nameInputDelete').value = '';
};