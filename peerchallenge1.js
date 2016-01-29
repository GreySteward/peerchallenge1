var value = 42;

if (value >= 53) {
		value += 42;
} else {
	value -= 13;
}
console.log(value);

var newString = '11'
value += newString
console.log(value);

var myArray = [];
for (var i = 0; i < value.length; i++) {
	myArray[i] = charAt(i);
}
console.log(myArray.toString());

myArray.shift();
myArray.pop();
console.log('step 5:', myArray);

var newAstorage = '';
for (var i = myArray.length-1;i >= 0; i--) {
	newAstorage += myArray[i];
	console.log('i: ' + i, newAstorage);
}
console.log('step 6:', newAstorage);

var newAstorage = '19';
value = parseInt(value);
newAstorage = parseInt(newAstorage);
console.log('step 7 value:', value);
console.log('step 7 newAstorage:', newAstorage);

value += newAstorage; 
console.log('step 8:', value);

if (value < 60) {
		value = 14;
} else if (value == 2930) {
		value = 27;
} else {
		value = 2;
}
console.log('step 9:', value);

var j = 10;
while(j > 10) {
		value++;
		j--;
}
console.log('step 10:', value);

function stepEleven(val) {
	val = val.toString();
	if (val.length > 1) {
		return val.slice(1);
	} else {
		return val;
	}
}

console.log(stepEleven(value));