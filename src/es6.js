let a = {name: "Babel", ver: 7};
{
	let {b, c} = a;
}

let arr = [0,1,2,3];
let arr2 = ["a", "b", "c"];

let arr3 = [...arr, ...arr2];

console.log(arr3);

let user = {
	firstname: 'John',
	lastname: 'Doe',
	social: {
		facebook: 'johndoe',
		twitter: 'jdoe'
	}
};

let {first, last, age = 25} = user;
// const {firstname, ...newUser} = user;
let [f, ...other] = arr;
let b= 6;
[a,b] = [b,a];
console.log({first}, {last}, {age}, {f}, {other});

function spreadArray(...arr) {
	console.log(arguments)
}

spreadArray(arr3);
spreadArray(user);
//classes

class Cat {
	constructor(name){
		this.name = name;
		console.log(`New ${this.name} created`);
	}
	set feed(food) {
		console.log(`${this.name} eats ${food}`);
	}
	
};

let blackCat = new Cat("John Doe");

blackCat.feed = 'meat';

class Tiger extends Cat {
	constructor(name, weight){
		super(name);
		this.weight = weight;
		console.log(`${this.name} has weight ${this.weight} kg`);
	}
}


let bigTiger = new Tiger("Lapochka", 256);

bigTiger.feed = 'cat';

console.log(bigTiger);