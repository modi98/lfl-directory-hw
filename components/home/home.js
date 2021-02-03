window.onload = function () {
  loadNav();
  const employeeListSection = document.getElementById('employeeList');

  employeeList.forEach((e) => {
    let row = `
    <div class="card">
      <p>${e.name}</p>
      <p>${e.officeNum}</p>
      <p>${e.phoneNum}</p>
    </div>
    `
    employeeListSection.innerHTML += row;
  });
};