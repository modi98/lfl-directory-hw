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

const navigateFromDrawer = function (route) {
  navigate(route);
  closeDrawer();
};

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
      <i id="iconOpenDrawer" class="fas fa-bars" onclick="openDrawer()"></i>
      <i id="iconCloseDrawer" class="fas fa-times" onclick="closeDrawer()"></i>
    </div>

    <div id="mobileNavMenu">
      <a onclick="navigateFromDrawer('view')" class="navlink">View</a>
      <a onclick="navigateFromDrawer('add')" class="navlink">Add</a>
      <a onclick="navigateFromDrawer('verify')" class="navlink">Verify</a>
      <a onclick="navigateFromDrawer('update')" class="navlink">Update</a>
      <a onclick="navigateFromDrawer('delete')" class="navlink">Delete</a>
    </div>

    <div id="drawerOverlay" onclick="closeDrawer()"></div>
    `;
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