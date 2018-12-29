"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var a = { name: "Babel", ver: 7 };
{
	var _a = a,
	    _b = _a.b,
	    c = _a.c;
}

var arr = [0, 1, 2, 3];
var arr2 = ["a", "b", "c"];

var arr3 = [].concat(arr, arr2);

console.log(arr3);

var user = {
	firstname: 'John',
	lastname: 'Doe',
	social: {
		facebook: 'johndoe',
		twitter: 'jdoe'
	}
};

var first = user.first,
    last = user.last,
    _user$age = user.age,
    age = _user$age === undefined ? 25 : _user$age;
// const {firstname, ...newUser} = user;

var f = arr[0],
    other = arr.slice(1);

var b = 6;
var _ref = [b, a];
a = _ref[0];
b = _ref[1];

console.log({ first: first }, { last: last }, { age: age }, { f: f }, { other: other });

function spreadArray() {
	for (var _len = arguments.length, arr = Array(_len), _key = 0; _key < _len; _key++) {
		arr[_key] = arguments[_key];
	}

	console.log(arguments);
}

spreadArray(arr3);
spreadArray(user);
//classes

var Cat = function () {
	function Cat(name) {
		_classCallCheck(this, Cat);

		this.name = name;
		console.log("New " + this.name + " created");
	}

	_createClass(Cat, [{
		key: "feed",
		set: function set(food) {
			console.log(this.name + " eats " + food);
		}
	}]);

	return Cat;
}();

;

var blackCat = new Cat("John Doe");

blackCat.feed = 'meat';

var Tiger = function (_Cat) {
	_inherits(Tiger, _Cat);

	function Tiger(name, weight) {
		_classCallCheck(this, Tiger);

		var _this = _possibleConstructorReturn(this, (Tiger.__proto__ || Object.getPrototypeOf(Tiger)).call(this, name));

		_this.weight = weight;
		console.log(_this.name + " has weight " + _this.weight + " kg");
		return _this;
	}

	return Tiger;
}(Cat);

var bigTiger = new Tiger("Lapochka", 256);

bigTiger.feed = 'cat';

console.log(bigTiger);