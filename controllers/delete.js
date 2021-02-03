const deleteName = function () {
  const name = document.getElementById('nameInputDelete').value;
  
  document.getElementById('errorMessageDelete').innerHTML = '';

  if (!name) {
    document.getElementById('errorMessageDelete').innerHTML = 'Invalid input!';
    document.getElementById('deleteResult').innerHTML = 'Type a name to delete.';
  } else if(verifyEmployee(name)) {
    deleteEmployee(name);
    loadEmployees(employeeList);
    clearInputDelete();
    document.getElementById('deleteResult').innerHTML = `${name} was successfully deleted.`;
  } else {
    clearInputDelete();
    document.getElementById('deleteResult').innerHTML = `${name} was not found.`;
  }
};

const clearInputDelete = function () {
  document.getElementById('nameInputDelete').value = '';
};