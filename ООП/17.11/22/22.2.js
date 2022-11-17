class Validator {
	isString(str) {
		return (typeof str === 'string');
	}
	isEmail(eml) {
		return ((eml.indexOf('@') !== -1) && (eml.indexOf('.') !== -1))
	}
}let validator = new Validator();
let res = validator.isString ('20')
console.log(res)
res = validator.isEmail ('john2@jo.5')
console.log(res)