//РАННИЙ ВОЗВРАТ
function withdraw(amount, balance) {
  // Если  условие выполняется, вызывается console.log
  // и выход из функции. Код идущий после тела if не выполнится.
  if (amount === 0) {
    console.log("Для проведения операции введите сумму больше нуля");
    return;
  }

  // Если условие первого if не выполнилось, его тело пропускается
  // и интерпретатор доходит до второго if.
  // Если условие выполняется, вызывается console.log и выход из функции.
  // Код идущий после тела if  не выполнится.
  if (amount > balance) {
    console.log("Недостаточно средств на счету");
    return;
  }

  // Если ни один из предыдущих if не выполнился,
  // интерпретатор доходит до этого кода и выполняет его.
  console.log("Операция снятия средств проведена");
}

withdraw(0, 300); // "Для проведения операции введите сумму больше нуля"
withdraw(500, 300); // "Недостаточно средств на счету"
withdraw(100, 300); // "Операция снятия средств проведена"


//задание 2
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  // Change code below this line
  if (password === ADMIN_PASSWORD) {
    return("Welcome!");
  }
   return("Access denied, wrong password!");
  // Change code above this line
}


//задание 3
function checkStorage(available, ordered) {
  // Change code below this line
  if (ordered === 0) {
    return("Your order is empty!");
  }
  if (ordered > available) {
    return("Your order is too large, not enough goods in stock!");
  }
  return("The order is accepted, our manager will contact you");
  // Change code above this line
}

//задание 4
// Change code below this line
const fruits = ["apple", "plum", "pear", "orange"];


//задание 5
const fruits = ["apple", "plum", "pear", "orange"];
// Change code below this line
const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];


//задание 6
const fruits = ["apple", "plum", "pear", "orange"];
// Write your code under this line
fruits[1] = "peach";
fruits[3] = "banana";
console.log(fruits);


//задание 7
const fruits = ["apple", "peach", "pear", "banana"];
// Change code below this line
const fruitsArrayLength = fruits.length;


//задание 8
const fruits = ["apple", "peach", "pear", "banana"];
// Change code below this line
const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];


//задание 9
// вариант I
function getExtremeElements(array) {
  // Change code below this line
return [array[0], array[array.length - 1]];
// Change code above this line
}
// вариант II
function getExtremeElements(array) {
  // Change code below this line
 array.splice([1], [array.length-2] );
return array;
  // Change code above this line
}


//задание 10
function splitMessage(message, delimeter) {
  let words;
  // Change code below this line
words = message.split(delimeter)
  // Change code above this line
  return words;
}


//задание 11
function calculateEngravingPrice(message, pricePerWord) {
   // Change code below this line
return message.split(" ").length * pricePerWord;
   // Change code above this line
}


//задание 12
function makeStringFromArray(array, delimeter) {
  let string;
  // Change code below this line
string = array.join(delimeter);
  // Change code above this line
  return string;
}

//задание 13
// Вызов slugify("Arrays for begginers") возвращает "arrays-for-begginers"
function slugify(title) {
  // Change code below this line
return title.toLowerCase().split(" ").join("-");
  // Change code above this line
}


//задание 14
// Метод slice(begin, end) возвращает новый массив, содержащий копию части исходного массива, не изменяя его.
const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];
// Change code below this line
const firstTwoEls = fruits.slice(0, 2);
const nonExtremeEls = fruits.slice( 1, fruits.length - 1);
const lastThreeEls = fruits.slice(2);


//задание 15
//Метод concat используется для объединения двух или более массивов. 
const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];
const allClients = oldClients.concat(newClients); // Change this line


//задание 16 КОМПОЗИЦИЯ МАССИВОВ
// Напиши функцию makeArray(firstArray, secondArray, maxLength) для создания нового массива со всеми элементами двух исходных firstArray и secondArray. Параметр maxLength содержит максимально допустимую длину нового массива.
function makeArray(firstArray, secondArray, maxLength) {
    // Change code below this line
let x = firstArray.concat(secondArray);
  if(x.length > maxLength) {return x.slice(0, maxLength );}
return x;
    // Change code above this line
  };


//задание 17 ЦИКЛ FOR
const start = 3;
const end = 7;
for (let i = start; i <= end; i += 1) { // Change this line
  console.log(i);
}



//задание 18 СУММА ЧИСЕЛ (ЦИКЛ FOR)
// Напиши функцию calculateTotal(number), которая принимает целое число (параметр number) и возвращает сумму всех целых чисел от единицы и до этого числа.
function calculateTotal(number) {
 // Change code below this line
  let total = 0;
for (let i = 0; i <= number; i += 1) {
  total += i;
}
  return total;
  // Change code above this line
}

//задание 19 ИТЕРАЦИЯ ПО МАССИВУ
// Цикл for можно использовать для итерации по массиву, то есть «перебрать» его поэлементно.
const fruits = ['apple', 'plum', 'pear', 'orange'];
for (let i = 0; i < fruits.length; i += 1) { // Change this line
  const fruit = fruits[i]; // Change this line
  console.log(fruit);
}

//задание 20 ПОДСЧЁТ СУММЫ ПОКУПКИ
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
for (let i = 0; i < order.length; i += 1) {
  total += order[i];
}
  // Change code above this line
  return total;
}


// задание 21 ПОИСК САМОГО ДЛИННОГО СЛОВА
function findLongestWord(string) {
  // Change code below this line
let newString = string.split(' ');
  let wordLength = 0;
  let longestWord;
  
  for (let i = 0; i <= newString.length; i += 1) {
  wordLength = newString[1].length;
    
    if (newString[i].length > wordLength) {
    longestWord = newString[i];
    return longestWord;
    }
  }
  
return newString;
  // Change code above this line
}

// задание 22 Метод push() позволяет добавить один или несколько элементов в конец массива, без необходимости указывать индексы добавляемых элементов.
function createArrayOfNumbers(min, max) {
  const numbers = [];
  // Change code below this line
  for (let i = min; i <= max; i += 1) {
  numbers.push(i);
  }

  // Change code above this line
  return numbers;
}



//задание 23 ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ
function filterArray(numbers, value) {
   // Change code below this line
const filteredNumbers = [];
      for (let i = 0; i < numbers.length; i += 1) {
            const number = numbers[i];
            if (number > value) {
                  filteredNumbers.push(number);
            }
      }
      return filteredNumbers;
  // Change code above this line
}


//задание 24 МЕТОД INCLUDES()
function checkFruit(fruit) {
  const fruits = ["apple", "plum", "pear", "orange"];

  return fruits.includes(fruit); // Change this line
}


//задание 25  ОБЩИЕ ЭЛЕМЕНТЫ
function getCommonElements(array1, array2) {
  // Change code below this line
  const includeElement = [];
for (let element of array1) {
 if (array2.includes(element)){
   includeElement.push(element);
 }
}
return includeElement;
 // Change code above this line
}


//задание 26
function calculateTotalPrice(order) {
  let total = 0;
  // Change code below this line
  for (const i of order) {
    total += i;
  }
  // Change code above this line
  return total;
}


//задание 27 ФИЛЬТРАЦИЯ МАССИВА ЧИСЕЛ 2.0
function filterArray(numbers, value) {
  // Change code below this line
  const filteredNumbers = [];

  for (const number of numbers) {

    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
  // Change code above this line
}


//задание 28 ОПЕРАТОР %
// Change code below this line
const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;


//задание 29 ЧЁТНЫЕ ЧИСЛА
function getEvenNumbers(start, end) {
   // Change code below this line
  let evenNumbers = [];
  
for (let i = start; i <= end; i += 1) {
  
  if (i % 2 === 0) {
 	evenNumbers.push(i);
 }
}
  return evenNumbers;
    // Change code above this line
  }


//задание 30 ОПЕРАТОР BREAK
const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

//задание 31 ОПЕРАТОР BREAK VS RETURN В ФУНКЦИИ
function findNumber(start, end, divisor) {
  // Change code below this line
  let number;

  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      number = i;
       return number; 
    }
  }

  // Change code above this line
}



//задание 32
function includes(array, value) {
  // Change code below this line
for (const element of array) {
  
  if (element === value) {
    return true; }

}
  return false;
  // Change code above this line
}