//№1
let i = 1;
while (i <= 100) {
console.log(i)
i++
};
//№2
for (i = 100; i >= 1; i--) {
	document.write(i + '<br>');
}
//№3
for (var i = 1; i <= 100; i++) {
  if(i % 2 == 0) {
	document.write(i + '<br>');
  }
}
//№4
var arr = [];

for(i =1; i <= 10;i++) {
  arr[i] = 'x';
}
document.write(arr);
//№5
var arr = [];

for(i = 1; i <= 10;i++) {
  arr.push(i);
}
document.write(arr);
//№6
let arr1 = [6,-9,34,8,12];
let arr2 = arr1.filter(x => x > 0 && x <10);
console.log(arr2);
//№7
let arr = [1, 5, 8, 14, 52, 48];
for (let elem of arr) {
if (elem === 5) {
console.log(elem);
break;
}
}
//№8
const count = () => {
    let i = 10
    let massive = 0
    while (i >= 0) {
        massive = massive + i
        i--
    }
    console.log(massive)
    return i
}
count()
//№9
const count = () => {
    let i = 10
    let massive = 0
    while (i >= 0) {
        massive = massive + i**2
        i--
    }
    console.log(massive)
    return i
}
count()
//№10
let arr = [0, 2, 4, -1, -3, 1, 7, 0, -5, 8,5 ];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
sum +=arr[i];
}
let sredarefm = sum / arr.length
console.log(sredarefm)