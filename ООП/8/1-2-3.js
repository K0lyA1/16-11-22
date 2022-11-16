class Student{
	constructor() {
		this.name = "";
		this.surn = "";
	}
	show(){
		console.log(this.name);
		console.log(this.surn);

	}
	cape(){
		this.name = this.name[0].toUpperCase() + this.name.slice(1);
		this.surn = this.surn[0].toUpperCase() + this.surn.slice(1);
		console.log(this.name[0].toUpperCase()+'.'+this.surn[0].toUpperCase()+'.');
		this.show();
	}
}
let user = new Student();
user.name = 'OLEgator';
user.surn = 'Olegator3000';                       
user.cape();