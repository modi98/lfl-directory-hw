const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];


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