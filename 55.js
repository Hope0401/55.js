// 1. Написать функцию, которая принимает два параметра и складывает их.
//Предусмотреть проверку на тип данных. Если хоть один из параметров не является числом, должно выводиться ообщение об ошибке.
numbers = function (a , b) {
if(a == underfined || b == underfined ) {
console.log ('введите два числа ')
} else if (typeof a == 'number' || typeof b == 'number'){
console.log ('введите числа')
} else {
return a + b ;
}
}

// 2.Измените функцию "square" так, чтобы в случае ее вызова без аргумента генерировалась консольная ошибка (console.error)
function square(a) {
  if (a == underfined ) {
  console.log("Функция "square" не может быть вызвана без аргумента")
} else {
return a*a
}
}

// 3. Создать функцию "угадай число". Она принимает число от 1 до 10. Генерирует рандомное число от 1 до 10 и сравнивает с заданным числом.
function getRandomInteger(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}
function randomInteger(a) {
let randomNum = getRandomInteger (0, 10);
if (a == randomNum ) {
console.log ('Вы выиграли')
} else {
console.log ('Вы не угадали, ваше число -' a , 'а выпало число' randomNum )
}
}


// 4. Определить массив, например let arr = [5, 4, 3, 8, 0];
Создать функцию filterFor(arr, a). Функция должна вернуть новый массив из элементов arr, но в нем должны содержаться элементы, которые больше или равны (>=) значения переменной a.

function filterFor(arr,a) {
const newArr=[];
arr.forEach (item ⇒ {
if (item >= a ) {
newArr.push (item)
}
})
return newArr;
}


// 5. Напишите функцию copyArr(arr), которая копирует массив, не изменяя оригинал. Используйте подходящий метод массива.
 const copyArray(arr);
const newArray = copyArray.map (function (item) {
return item;
})

// 6. Создайте функцию sumObjectValues, которая будет суммировать все значения свойств, которые являются числами. Сумму чисел необходимо вернуть из функции.
const objectNumbers = {
  a: 10,
  b: 20,
  c: 'string',
  d: 12,
} ;
const newObjectNumbers = objectNumbers.map (function (item , index) {
return item + index ;
})
console.log (newObjectNumbers);

function objectNumbers (obj) {
let sum = 0;
for (let key in obj ) {
if ( typeof obj[key] == 'number'){
sum = sum + obj[key];
}
}
return sum;
}
