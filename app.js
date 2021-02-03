// Your work here
const loadEmployees = function (list) {
  const employeeListSection = document.getElementById('employeeList');

  employeeListSection.innerHTML = '';
  // Reverse the array not in place so we don't modify the existing one
  list.slice().reverse().forEach((e) => {
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

// Not key sensitive
const verifyEmployee = function (name) {
  return employeeList.some((e) => e.name.toLowerCase() === name.toLowerCase())
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
}

const navigate = function (route) {
  switch (route) {
    case 'view':
      hideMenus();
      break;
    case 'add':
      hideMenus();
      document.getElementById('add').classList.remove('hidden-menu');
      break;
    case 'verify':
      hideMenus();
      document.getElementById('verify').classList.remove('hidden-menu');
      break;
    case 'update':
      hideMenus();
      document.getElementById('update').classList.remove('hidden-menu');
      break;
    case 'delete':
      hideMenus();
      document.getElementById('delete').classList.remove('hidden-menu');
      break;
    default:
      hideMenus();
      break;
  }
};

const loadNav = function () {
  document.getElementById('nav').innerHTML = `
    <div id="desktopNav">
      <a onclick="navigate('view')" class="navlink">View</a>
      <a onclick="navigate('add')" class="navlink">Add</a>
      <a onclick="navigate('verify')" class="navlink">Verify</a>
      <a onclick="navigate('update')" class="navlink">Update</a>
      <a onclick="navigate('delete')" class="navlink">Delete</a>
    </div>

    <div id="mobileNav">
      <a onclick="navigate('view')" class="navlink">View</a>
      <a onclick="navigate('add')" class="navlink">Add</a>
      <a onclick="navigate('verify')" class="navlink">Verify</a>
      <a onclick="navigate('update')" class="navlink">Update</a>
      <a onclick="navigate('delete')" class="navlink">Delete</a>
    </div>
    `;
}

const hideMenus = function () {
  document.getElementById('add').classList.add('hidden-menu');
  document.getElementById('verify').classList.add('hidden-menu');
  document.getElementById('update').classList.add('hidden-menu');
  document.getElementById('delete').classList.add('hidden-menu');
};

window.onload = function () {
  loadNav();
  loadEmployees(employeeList);
};