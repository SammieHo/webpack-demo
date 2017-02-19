module.exports.user = function(name,age){
	this.name = name;
	this.age = age;

	alert(this.name + ":" + this.age);
}