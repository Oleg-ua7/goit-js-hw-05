//узн длинну строки
var lastNameLength = 0;
var lastName = 'Lovelacedfdfdfdfdf';
lastNameLength = lastName.length;
console.log(lastNameLength);

//поиск первого символа в строке
var firstLetterOfLastName = '';
var lastName = 'Lovelace';

firstLetterOfLastName = lastName[0];
console.log(firstLetterOfLastName);

//понимание неизменяемости строк
var myStr = 'Jello World';
myStr = 'Hello World';
console.log(myStr);

//пробелы в словах
var myNoun = 'dog';
var myAdjective = 'big';
var myVerb = 'ran';
var myAdverb = 'quickly';

var wordBlanks = myAdjective + ' ' + myNoun;
console.log(wordBlanks);
////////////////////////////////МАССИВ МАССИВ
//доступ к данным массива с помощью индексов
var myArray = [50, 60, 70];

var myData = myArray[0];

//изменение данных массива с помощью индексов
var myArray = [18, 64, 99];

myArray[0] = 45;

///доступ к многомерным массивам с помощью индексов
var myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

var myData = myArray[2][1]; //myDataдолжно быть равно 8.

//манипулирование массивами с помощью push ()
var myArray = [
  ['John', 23],
  ['cat', 2],
];

myArray.push(['dog', 3]);
console.log(myArray); ///добавил в конец массив

////манипулирование массивами с помощью pop ()
// var myArray = [
//   ['John', 23],
//   ['cat', 2],
// ];
var myArray = [1, 2, 3, 4, 5, 6, 7];
var removedFromMyArray = myArray.pop();
console.log(removedFromMyArray); ///разбирался как это работатет (убрал последний элем с массива и записал его значение в переменную removedFromMyArray)

//манипулирование массивами с помощью shift () функция кот-я удал первый элемент массива
var myArray = [
  ['John', 23],
  ['dog', 3],
];

var removedFromMyArray = myArray.shift();

//манипулирование массивами с помощью unshift () функция добавляет элемент в начало массива
var myArray = [
  ['John', 23],
  ['dog', 3],
];
myArray.shift();

myArray.unshift(['Paul', 35]);
console.log(myArray);

// список покупок   (первый элемент строка второй число)
var myList = [
  ['bob', 1],
  ['chokolate', 2],
  ['apple', 3],
  ['pen', 4],
  ['pensil', 5],
];

// функции (обьявление и дальше вызов функции)
function reusableFunction() {
  console.log('Hi World');
}
reusableFunction();

///передача значений функциям с аргументами (первый параметр(а)-это аргумент(1), а второй параметр(b)-это аргумент(число2) и так далее . первый параметр первый аргумент второй параметр второй аргумент)
function functionWithArgs(a, b) {
  console.log(a + b);
}
functionWithArgs(1, 2);
functionWithArgs(7, 9);
functionWithArgs(12, 9);
functionWithArgs(725, 9);

//((((((глобальная область действия и функции))))))
// Объявляем переменную myGlobal под этой строкой
var myGlobal = 10;

function fun1() {
  // Назначьте 5 для oopsGlobal Здесь
  oopsGlobal = 5;
}

// Изменяем только код над этой строкой

function fun2() {
  var output = '';
  if (typeof myGlobal != 'undefined') {
    output += 'myGlobal:' + myGlobal;
  }
  if (typeof oopsGlobal != 'undefined') {
    output += 'oopsGlobal:' + oopsGlobal;
  }
  console.log(myGlobal);
}

//((((((()))))))

//локальная область видимости переменной и функции (переменная var myVar доступна только внутри данной функции )
function myLocalScope() {
  'use strict';

  var myVar;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// console.log('outside myLocalScope', myVar);

//глобальная и локальная область видимости в функциях
var outerWear = 'T-Shirt';

function myOutfit() {
  var outerWear = 'sweater';

  return outerWear;
}

myOutfit();

//возврат значения из функции с возвратом (тут эта строка var answer = timesFive(5); умножается на эту return num * 5; )
function timesFive(num) {
  return num * 5;
}
var answer = timesFive(5);
// var answer = timesFive(2);
// var answer = timesFive(0);
console.log(answer);

//понимание неопределенного значения, возвращаемого функцией (так как здесь не указан return то выводом данной функции будет undefined)
//Создайте функцию addFiveбез аргументов. Эта функция добавляет к sumпеременной 5, но ее возвращаемое значение равно undefined.
var sum = 0;

function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum = sum + 5;
}

addThree();
addFive();

//присвоение с возвращаемым значением (Вызовите processArgфункцию с аргументом 7и присвойте ее возвращаемое значение переменной processed.)
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7);

//стоять в очереди
// В информатике очередь - это абстрактная структура данных, в которой элементы хранятся в порядке. Новые элементы могут быть добавлены в конце очереди, а старые элементы удалены из передней части очереди.
// Напишите функцию, nextInLineкоторая принимает в качестве аргументов массив ( arr) и число ( item).
// Добавьте число в конец массива, затем удалите первый элемент массива.
// Затем nextInLineфункция должна вернуть удаленный элемент.
function nextInLine(arr, item) {
  arr.push(item);
  var item = arr.shift();
  return item;
}

// Setup
var testArr = [1, 2, 3, 4, 5];

// Display code
console.log('Before: ' + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log('After: ' + JSON.stringify(testArr));

//понимание логических значений БУЛЕВ ТИП ТРУ ИЛИ ФОЛС
//Измените welcomeToBooleansфункцию так, чтобы она возвращалась, trueа не falseпри нажатии кнопки запуска.
function welcomeToBooleans() {
  return true;
}

//использование условной логики с операторами if
//Создайте ifоператор внутри функции, который будет возвращать "Yes, that was true"значение параметра wasThatTrue, trueа в "No, that was false"противном случае - return .
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return 'Yes, that was true';
  }
  return 'No, that was false';
}

//сравнение с оператором равенства
//Добавьте оператор равенства в указанную строку, чтобы функция возвращала «Equal», когда valэквивалентна 12.
function testEqual(val) {
  if (val == 12) {
    return 'Equal';
  }
  return 'Not Equal';
}
testEqual(10);

//итерация по массиву с помощью цикла For
//Объявить и инициализировать переменную totalв 0. Используйте forцикл, чтобы добавить значение каждого элемента myArrмассива total
//(пояснение задачи )https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-iterate-through-an-array-with-a-for-loop/18216
var myArr = [2, 3, 4, 5, 6];

var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
console.log(total);

//

// confirm('Деньги успешно списаны с вашей карты . Спасибо что вы с нами  ');
//тернарный оператор
const age = 20;
const type = age >= 18 ? 25 * 3 : 'child';
console.log(type);

// swich
let cost;
const subscription = 'premium';

switch (subscription) {
  case 'free':
    cost = 0;
    break;

  case 'pro':
    cost = 100;
    break;

  case 'premium':
    cost = 500;
    break;

  default:
    console.log('Invalid subscription type');
}

console.log(cost); // 500

// else if construction
// let cost;
// const subscription = 'premium';

// if (subscription === 'free') {
//   cost = 0;
// } else if (subscription === 'pro') {
//   cost = 100;
// } else if (subscription === 'premium') {
//   cost = 500;
// } else {
//   console.log('Invalid subscription type');
// }

console.log(cost); // 500

// if else construction
// let cost;
// const subscription = 'free';

// if (subscription === 'pro') {
//   cost = 100;
// } else {
//   cost = 0;
// }

// console.log(cost); // 0

//Инструкция if
// let cost = 0;
// const subscription = 'pro';

// if (subscription === 'pro') {
//   cost = 100;
// }

// console.log(cost); // 100

//цикл while
let counter = 0;

while (counter < 10) {
  console.log('counter: ', counter);
  counter += 1;
}

//(второй пример )

let clientCounter = 18;
const maxClients = 25;

while (clientCounter < maxClients) {
  console.log(clientCounter);
  clientCounter += 1;
}

///цикл do while
// let password = '';

// do {
//   password = prompt('Введите пароль длиннее 4-х символов', '');
// } while (password.length < 5);

// console.log('Ввели пароль: ', password);

//Цикл for
const max = 10;

for (let i = 0; i < max; i += 1) {
  console.log(i);
}
//( пример 2 )
// const target = 3;
// let sum = 0;

// for (let i = 0; i <= target; i += 1) {
//   sum += i;
// }

// console.log(sum);
//( пример 3)
// const max = 10;

// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }
///

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log('Нечетное i: ', i); // 1, 3, 5, 7, 9
}

//знакомство с операторами Else If
function testElseIf(val) {
  if (val > 10) {
    return 'Greater than 10';
  } else if (val < 5) {
    return 'Smaller than 5';
  } else {
    return 'Between 5 and 10';
  }

  testElseIf(7);
}

//

const goods = {
  apples: 6,
  grapes: 3,
  bread: 4,
  cheese: 7,
  hleb: 23,
  moloko: 56,
  zalupa: 30,
};

const values = Object.values(goods); // [6, 3, 4, 7]

let tot = 0;

for (const value of values) {
  tot += value;
}

console.log(tot); // 20
