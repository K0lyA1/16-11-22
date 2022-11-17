class Employee {
	#name;
	#salary;
	
	constructor(name, salary) {
		this.#name = name;
		this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
	getSalary(){
	  return this.#salary
	}
}

let employees = [
  new Employee('Zhen9', 4200),
  new Employee('Sasha', 500),
  new Employee('Kolya', 1700),
  new Employee('PupbIn9', 99999999900)
  ]
  
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}