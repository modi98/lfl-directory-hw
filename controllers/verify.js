const validateName = function () {
  const name = document.getElementById('nameInputVerify').value;
  document.getElementById('errorMessageVerify').innerHTML = '';
  if (!name) {
    document.getElementById('errorMessageVerify').innerHTML = 'Invalid input!';
    return;
  };

  // This function is not key sensitive for better user experience
  if (verifyEmployee(name)) {
    document.getElementById('searchResult').innerHTML = `${name} exists!`;
    clearInputVerify();
  } else {
    document.getElementById('searchResult').innerHTML = `${name} doesn't exist`;
    clearInputVerify();
  }
};

const clearInputVerify = function () {
  document.getElementById('nameInput').value = '';
};