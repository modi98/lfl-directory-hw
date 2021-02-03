const validateName = function () {
  const name = document.getElementById('nameInput').value;
  if (!name) return;

  // This function is not key sensitive for better user experience
  if (verifyEmployee(name)) {
    document.getElementById('searchResult').innerHTML = `${name} exists!`;
    clearInput();
  } else {
    document.getElementById('searchResult').innerHTML = `${name} doesn't exist`;
    clearInput();
  }
};

const clearInput = function () {
  document.getElementById('nameInput').value = '';
};

window.onload = function () {
  loadNav();
};