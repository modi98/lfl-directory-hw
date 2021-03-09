// Your work here
const loadEmployees = function (list) {
  const employeeListSection = document.getElementById('employeeList');

  employeeListSection.innerHTML = '';
  // Reverse the array not in place so we don't modify the existing one
  list.slice().reverse().forEach((e) => {
    let row = `
    <div class="card">
      <p class="employee-info">${e.name}</p>
      <p class="employee-info">${e.officeNum}</p>
      <p class="employee-info">${e.phoneNum}</p>
    </div>
    `
    employeeListSection.innerHTML += row;
  });
};

// Not key sensitive
const verifyEmployee = function (name) {
  return employeeList.some((e) => e.name.toLowerCase() === name.toLowerCase());
};

// Not key sensitive
const updateEmployee = function (employee) {
  const index = employeeList.findIndex((e) => e.name.toLowerCase() === employee.name.toLowerCase());
  employeeList[index].officeNum = employee.officeNum;
  employeeList[index].phoneNum = employee.phoneNum;
};

const deleteEmployee = function (name) {
  const index = employeeList.findIndex((e) => e.name.toLowerCase() === name.toLowerCase());
  employeeList.splice(index, 1);
};

const navigateFromDrawer = function (route) {
  navigate(route);
  closeDrawer();
};

const openDrawer = function () {
  document.getElementById('mobileNavMenu').style.left = '0';
  document.getElementById('drawerOverlay').style.display = 'block';
  document.getElementById('iconOpenDrawer').style.display = 'none';
  document.getElementById('iconCloseDrawer').style.display = 'inline-block';
  document.body.style.overflow = 'hidden';
};

const closeDrawer = function () {
  document.getElementById('mobileNavMenu').style.left = '-100vw';
  document.getElementById('drawerOverlay').style.display = 'none';
  document.getElementById('iconOpenDrawer').style.display = 'inline-block';
  document.getElementById('iconCloseDrawer').style.display = 'none';
  document.body.style.overflow = 'visible';
};

const navigate = function (route) {
  let url;
  switch (route) {
    case 'view':
      document.getElementById("view").innerHTML = '';
      return;
    case 'add':
      url = 'views/add.html';
      break;
    case 'verify':
      url = 'views/verify.html';
      break;
    case 'update':
      url = 'views/update.html';
      break;
    case 'delete':
      url = 'views/delete.html';
      break;
    default:;
      document.getElementById("view").innerHTML = '';
      return;
  }

  let client = new XMLHttpRequest();
  client.open('GET', url);
  client.onreadystatechange = () => {
    document.getElementById("view").innerHTML=client.responseText;
  }
  client.send();
};

window.onload = function () {
  loadEmployees(employeeList);
};