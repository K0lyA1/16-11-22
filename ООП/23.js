class Position{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Department{
	constructor(name) {
		  this.name = name;
	  }
  }
  class Employee {
	  constructor(name, position, department) {
		  this.name = name;
		  this.position = position;
		  this.department = department;
	  }
  }
  
  let position = new Position('Vologdadada');
  let department = new Department('NoNoNofearNolielistenmyrhythmhandsupandtalkaboutalegalize');
  let employee = new Employee('PupbIn9', position, department);
  
  console.log(employee.name);
  console.log(employee.position.name);
  console.log(employee.department.name);