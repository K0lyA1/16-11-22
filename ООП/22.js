class Validator {
	isString(str) {
		return (typeof str === 'string');
	}
	isEmail(eml) {
		return ((eml.indexOf('@') !== -1) && (eml.indexOf('.') !== -1))
	}
    isDomain(dom) {
        return ((dom.indexOf('.com') !== -1) || (dom.indexOf('.ru') !== -1))
    }
    isNumber (num) {
        return (typeof num === 'number');
    }
}
let validator = new Validator();
let res = validator.isString ('20')
console.log(res)
res = validator.isEmail ('pupbinka28@rubl.ru')
console.log(res)
res = validator.isDomain ('pupbin9.ru')
console.log(res)
res = validator.isNumber (20)
console.log(res)