/*
		*************
		** Objects **
		*************
*/

function person(name, age, nickname) {
	this.name = namee;
	this.age = age;
	this.nickname = nickname;

	this.present = function() {
		console.log(`Hello, I am ${this.name}, but you can call me ${this.nickname}. Oh, and I am %{this.age} years old.`)
	}
}

var felix = person('Gabriel', 22, 'Felix')
felix.present()
/*
* 'Hello, I am Gabriel, but you can call me 
* Felix. Oh, and I am 22 years old.'
*/

var felix = {
	name     : 'Gabriel',
	nickname : 'Felix',
	age      : 22,
}

/*
		************
		** Arrays **
		************
*/

var array1 = [1, 2, 3]
var array2 = new Array(1, 2, 3)
var array3 = new Array(3)
array3[0] = 1
array3[1] = 2
array3[2] = 3

array1.length // 3
array2.concat(array3) // [1, 2, 3, 1, 2, 3]

/*
		***************
		** Variables **
		***************
*
* 	/ const  >>  imutable
* 	/ var    >>  global scope
* 	/ let    >>  local scope
*/
var a    =  10;
const b  =  'hello';
let c    =  true;