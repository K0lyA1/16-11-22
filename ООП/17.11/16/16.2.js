class Employee {
	#name;
	#age;
	#salary;
		constructor(name, age, salary) {
			this.#name = name;
			this.#salary = salary;
            this.#age = age;
		}

    getName() {
        return this.#name;
    }
    getSalary() {
        return this.#salary;
    }
    getSAge() {
        return this.#age;
    }
}    