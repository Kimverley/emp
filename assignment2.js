const employees = [
  {
    id: 101,
    name: "Sarah Johnson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "JavaScript",
    salary: 95000,
    yearsOfExperience: 6,
    isRemote: true,
    email: "sarah.johnson@company.com"
  },
  {
    id: 102,
    name: "Michael Chen",
    department: "Engineering",
    position: "Junior Developer",
    primarySkill: "Python",
    salary: 65000,
    yearsOfExperience: 2,
    isRemote: false,
    email: "michael.chen@company.com"
  },
  {
    id: 103,
    name: "Emily Rodriguez",
    department: "Marketing",
    position: "Marketing Manager",
    primarySkill: "SEO",
    salary: 78000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "emily.rodriguez@company.com"
  },
  {
    id: 104,
    name: "David Kim",
    department: "Engineering",
    position: "DevOps Engineer",
    primarySkill: "Docker",
    salary: 92000,
    yearsOfExperience: 7,
    isRemote: true,
    email: "david.kim@company.com"
  },
  {
    id: 105,
    name: "Lisa Anderson",
    department: "Sales",
    position: "Sales Representative",
    primarySkill: "Negotiation",
    salary: 72000,
    yearsOfExperience: 4,
    isRemote: false,
    email: "lisa.anderson@company.com"
  },
  {
    id: 106,
    name: "James Wilson",
    department: "Engineering",
    position: "Senior Developer",
    primarySkill: "Java",
    salary: 98000,
    yearsOfExperience: 8,
    isRemote: true,
    email: "james.wilson@company.com"
  },
  {
    id: 107,
    name: "Rachel Green",
    department: "Engineering",
    position: "Frontend Developer",
    primarySkill: "JavaScript",
    salary: 88000,
    yearsOfExperience: 5,
    isRemote: true,
    email: "rachel.green@company.com"
  }
];

// 1. includes()
const departments = employees.map(emp => emp.department);
const hasMarketing = departments.includes("Marketing");

// 2. indexOf()
const employeeNames = employees.map(emp => emp.name);
const davidIndex = employeeNames.indexOf("David Kim");

// 3. find()
const firstMarketingEmployee = employees.find(
  emp => emp.department === "Marketing"
);

// 4. findIndex()
const indexOf104 = employees.findIndex(emp => emp.id === 104);

// 5. some()
const hasMoreThan7Years = employees.some(
  emp => emp.yearsOfExperience > 7
);

// 6. every()
const engineeringEmployees = employees.filter(
  emp => emp.department === "Engineering"
);
const allEngineeringRemote = engineeringEmployees.every(
  emp => emp.isRemote === true
);

// 7. filter()
const highPaidRemote = employees.filter(
  emp => emp.isRemote && emp.salary > 80000
);

// 8. map()
const nameAndEmail = employees.map(emp => ({
  name: emp.name,
  email: emp.email
}));

// 9. join()
const uniqueDepartments = [...new Set(employees.map(emp => emp.department))];
const departmentString = uniqueDepartments.join(", ");

// 10. concat()
const newHires = [
  {
    id: 108,
    name: "Anna Taylor",
    department: "HR",
    position: "HR Specialist",
    primarySkill: "Recruitment",
    salary: 68000,
    yearsOfExperience: 3,
    isRemote: false,
    email: "anna.taylor@company.com"
  },
  {
    id: 109,
    name: "Tom Brooks",
    department: "Engineering",
    position: "Backend Developer",
    primarySkill: "Node.js",
    salary: 85000,
    yearsOfExperience: 4,
    isRemote: true,
    email: "tom.brooks@company.com"
  }
];

const updatedEmployees = employees.concat(newHires);

// 11. Multi-method Challenge 1
const jsDevelopers = employees
  .filter(emp => emp.primarySkill === "JavaScript")
  .map(emp => emp.name)
  .join(", ");

// 12. Multi-method Challenge 2
const allRemoteHave4Years = employees
  .filter(emp => emp.isRemote)
  .every(emp => emp.yearsOfExperience >= 4);

// 13. Multi-method Challenge 3
const uniqueSkills = employees
  .map(emp => emp.primarySkill)
  .filter((skill, index, arr) => arr.indexOf(skill) === index);

// 14. Multi-method Challenge 4
const engineeringTeam = employees.filter(
  emp => emp.department === "Engineering"
);

let totalSalary = 0;
for (let i = 0; i < engineeringTeam.length; i++) {
  totalSalary += engineeringTeam[i].salary;
}

console.log({
  hasMarketing,
  davidIndex,
  firstMarketingEmployee,
  indexOf104,
  hasMoreThan7Years,
  allEngineeringRemote,
  highPaidRemote,
  nameAndEmail,
  departmentString,
  updatedEmployees,
  jsDevelopers,
  allRemoteHave4Years,
  uniqueSkills,
  totalSalary
});
