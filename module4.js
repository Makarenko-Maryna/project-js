// задание 9
// Change code below this line
const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// Change code above this line


// задание 10 СТРЕЛОЧНЫЕ ФУНКЦИИ КАК КОЛЛБЕКИ
// Change code below this line
const calculateTotalPrice = orderedItems => {
  let totalPrice = 0;

  orderedItems.forEach((item) => {
    totalPrice += item;
  });

  return totalPrice;
}

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// Change code above this line


// задание 11
// Change code below this line
const filterArray = (numbers, value) => {
  const filteredNumbers = [];

  numbers.forEach((number) => {
    if (number > value) {
      filteredNumbers.push(number);
    }
  });

  // Change code above this line
  return filteredNumbers;
}
// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// }


// задание 12
// Change code below this line
const getCommonElements = (firstArray, secondArray) => {
  const commonElements = [];

  firstArray.forEach((element) => {
    if (secondArray.includes(element)) {
      commonElements.push(element);
    }
  });

  // Change code above this line
  return commonElements;
}
// Change code below this line
// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }


// задание 13




// задание 14



// задание 15


// задание 16



// задание 20 ФИЛЬТРАЦИЯ УНИКАЛЬНЫХ ЭЛЕМЕНТОВ
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    genres: ["adventure", "history"],
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    genres: ["fiction", "mysticism"],
  },
  {
    title: "Redder Than Blood",
    author: "Tanith Lee",
    genres: ["horror", "mysticism", "adventure"],
  },
];
// Change code below this line
const allGenres = books.flatMap(genreS =>genreS.genres);
const uniqueGenres = allGenres.filter((genres, index, books) => books.indexOf(genres) === index);


// задание 21 МЕТОД FILTER() И МАССИВ ОБЪЕКТОВ
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  { 
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
];

const MIN_RATING = 8;
const AUTHOR = "Bernard Cornwell";
// Change code below this line

const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
const booksByAuthor = books.filter(authors => authors.author === AUTHOR);


// задание 22
// Change code below this line
const getUsersWithEyeColor = (users, color) => {
    return users.filter(user => user.eyeColor === color)};
// Change code above this line


// задание 23 возврат массива пользователей, возраст которых (свойство age) попадает в промежуток от minAge до maxAge
// Change code below this line
const getUsersWithAge = (users, minAge, maxAge) => {
    return users.filter(user => user.age >= minAge && user.age <= maxAge)};
// Change code above this line


// задание 24 ПОЛЬЗОВАТЕЛИ С ДРУГОМ
// Change code below this line
const getUsersWithFriend = (users, friendName) => {
   return users.filter(user => user.friends.includes(friendName))};
// Change code above this line



// задание 25 Дополни функцию getFriends(users) так, чтобы она возвращала массив друзей всех пользователей (свойство friends). У нескольких пользователей могут быть одинаковые друзья, сделай так чтобы возвращаемый массив не содержал повторений.
// Change code below this line
const getFriends = (users) => {
  return users.flatMap(user => user.friends).filter((friends, index, users) => users.indexOf(friends) === index);
};
// Change code above this line


// задание 26 Дополни функцию getActiveUsers(users) так, чтобы она возвращала массив активных пользователей, значение свойства isActive которых true.
// Change code below this line
const getActiveUsers = (users) => {
   return users.filter(user => user.isActive)};
// Change code above this lin


// задание 27 Дополни функцию getInactiveUsers(users) так, чтобы она возвращала массив неактивных пользователей, значение свойства isActive которых false.
// Change code below this line
const getInactiveUsers = (users) => {
   return users.filter(user => user.isActive === false)};
// Change code above this line


// задание 28 В переменной bookWithTitle получился объект книги название которой (свойство title) совпадает со значением переменной BOOK_TITLE.
// В переменной bookByAuthor получился объект книги автор который (свойство author) совпадает со значением переменной AUTHOR.
const books = [
  {
    title: 'The Last Kingdom',
    author: 'Bernard Cornwell',
    rating: 8.38,
  },
  {
    title: 'Beside Still Waters',
    author: 'Robert Sheckley',
    rating: 8.51,
  },
  {
    title: 'The Dream of a Ridiculous Man',
    author: 'Fyodor Dostoevsky',
    rating: 7.75,
  },
  { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
];
const BOOK_TITLE = 'The Dream of a Ridiculous Man';
const AUTHOR = 'Robert Sheckley';
// Change code below this line

const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
const bookByAuthor = books.find(book => book.author === AUTHOR);


// задание 29 Дополни функцию getUserWithEmail(users, email) так, чтобы она возвращала объект пользователя, почта которого (свойство email) совпадает со значением параметра email.
// Change code below this line
const getUserWithEmail = (users, email) => {
return users.find(user => user.email === email)};
// Change code above this line


// задание 30 В переменной eachElementInFirstIsEven был результат проверки всех элементов массива firstArray на чётность.
// В переменной eachElementInFirstIsOdd был результат проверки всех элементов массива firstArray на нечётность.
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change code below this line

const eachElementInFirstIsEven = firstArray.every(array => array % 2 === 0);
const eachElementInFirstIsOdd = firstArray.every(array => array % 2 !== 0);

const eachElementInSecondIsEven = secondArray.every(array => array%2 === 0);
const eachElementInSecondIsOdd = secondArray.every(array => array % 2 !== 0);

const eachElementInThirdIsEven = thirdArray.every(array => array%2 === 0);
const eachElementInThirdIsOdd = thirdArray.every(array => array%2 !== 0);


// задание 31 Дополни функцию isEveryUserActive(users) так, чтобы она проверяла все ли пользователи сейчас активны (свойство isActive) и возвращала true или false.
// Change code below this line
const isEveryUserActive = (users) => {
   return users.every(user => user.isActive)};
// Change code above this line


// задание 32
const firstArray = [26, 94, 36, 18];
const secondArray = [17, 61, 23];
const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// Change below this line
// В переменной anyElementInFirstIsEven был результат проверки наличия чётных элементов в массиве firstArray.
const anyElementInFirstIsEven = firstArray.some(elem => elem % 2 === 0);
// В переменной anyElementInFirstIsOdd был результат проверки наличия нечётных элементов в массиве firstArray.
const anyElementInFirstIsOdd = firstArray.some(elem => elem % 2 !== 0);

const anyElementInSecondIsEven = secondArray.some(elem => elem % 2 === 0);
const anyElementInSecondIsOdd = secondArray.some(elem => elem % 2 !== 0);

const anyElementInThirdIsEven = thirdArray.some(elem => elem % 2 === 0);
const anyElementInThirdIsOdd = thirdArray.some(elem => elem % 2 !== 0);



// задание 33 Дополни функцию isAnyUserActive(users) так, чтобы она проверяла наличие активных пользователей (свойство isActive) и возвращала true или false.
// Change code below this line
const isAnyUserActive = users => {
  return users=users.some(user => user.isActive)};
// Change code above this line


// задание 34 Игровому сервису необходим функционал подсчёта среднего времени проведённого в играх. Дополни код так, чтобы в переменной totalPlayTime получилось общее игровое время из массива playtimes.
const players = {
  mango: 1270,
  poly: 468,
  ajax: 710,
  kiwi: 244
};
const playtimes = Object.values(players); // [1270, 468, 710, 244]
// Change code below this line

const totalPlayTime = playtimes.reduce((playtimes, time) => {
  return playtimes +=time
});

// Change code above this line
const averagePlayTime = totalPlayTime / playtimes.length;


// задание 35 Нашему сервису необходимо рассчитать среднее время проведённое в одной игре для каждого игрока, и получить общую сумму этих времён. Рассчитать время для каждого из игроков, можно разделив его время (свойство playtime) на количество игр (свойство gamesPlayed).
// Change code below this line

const totalAveragePlaytimePerGame = players.reduce((total, player) => {
  return total + player.playtime / player.gamesPlayed
},0);


// задание 36 Дополни функцию calculateTotalBalance(users) так, чтобы она считала и возвращала сумму всех средств (свойство balance) которые хранят пользователи из массива users.
// Change code below this line
const calculateTotalBalance = users => {
   return users.reduce((total, user) => total + user.balance, 0);};
// Change code above this line


// задание 37 Дополни функцию getTotalFriendCount(users) так, чтобы она считала и возвращала общее количество друзей (свойство friends) всех пользователей из массива users.
// Change code below this line
const getTotalFriendCount = users => {
 return users.reduce((total,user) => total +user.friends.length, 0);};
// Change code above this line


// задание 38 Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной alphabeticalAuthors копия массива имён авторов authors отсортированная в по алфавиту.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
const authors = [
  "Tanith Lee",
  "Bernard Cornwell",
  "Robert Sheckley",
  "Fyodor Dostoevsky",
];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const alphabeticalAuthors = [...authors].sort();


// задание 39 Онлайн бибилиотеке необходимо отображать книги сортированные по дате издания, по её возрастанию или убыванию. Дополни код так, чтобы в переменной ascendingReleaseDates получилась отсортированная по возрастанию копия массива releaseDates, а в переменной descendingReleaseDates копия отсортированная по убыванию.
const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// Change code below this line

const ascendingReleaseDates = [...releaseDates].sort();

const descendingReleaseDates = [...releaseDates].sort((a, b) => b-a);

// задание 40




// задание 41 СОРТИРОВКА ОБЪЕКТОВ
const books = [
    {
        title: "The Last Kingdom",
        author: "Bernard Cornwell",
        rating: 8.38,
    },
    {
        title: "Beside Still Waters",
        author: "Robert Sheckley",
        rating: 8.51,
    },
    {
        title: "The Dream of a Ridiculous Man",
        author: "Fyodor Dostoevsky",
        rating: 7.75,
    },
    { title: "Redder Than Blood",
    author: "Tanith Lee", 
    rating: 7.94 },
    { title: "Enemy of God", 
    author: "Bernard Cornwell", 
    rating: 8.67 },
];
// Change code below this line

// В переменной sortedByAuthorName получился массив книг отсортированный по имени автора в алфавитном порядке.
const sortedByAuthorName = [...books].sort((authorA, authorB) => authorA.author.localeCompare(authorB.author));

// В переменной sortedByReversedAuthorName получился массив книг отсортированный по имени автора в обратном алфавитном порядке.
const sortedByReversedAuthorName = [...books].sort((authorA, authorB) => authorB.author.localeCompare(authorA.author));

// В переменной sortedByAscendingRating получился массив книг отсортированный по возрастанию рейтинга.
const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// В переменной sortedByDescentingRating получился массив книг отсортированный по убыванию рейтинга.
const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);


// задание 42 Дополни функцию sortByAscendingBalance(users) так, чтобы она возвращала массив пользователей отсортированный по возрастанию их баланса (свойство balance).
// Change code below this line
const sortByAscendingBalance = users => {
   return [...users].sort((a, b) => a.balance - b.balance)};
// Change code above this line


// задание 43 Дополни функцию sortByDescendingFriendCount(users) так, чтобы она возвращала массив пользователей отсортированный по убыванию количества их друзей (свойство friends).
// Change code below this line
const sortByDescendingFriendCount = users => {
   return [...users].sort((friendsA, friendsB) => friendsB.friends.length - friendsA.friends.length)};
// Change code above this line



// задание 44 Дополни функцию sortByName(users) так, чтобы она возвращала массив пользователей отсортированный по их имени (свойство name) в алфавитном порядке.
// Change code below this line
const sortByName = users => {
   return [...users].sort((nameA, nameB) => nameA.name.localeCompare(nameB.name))};
// Change code above this line


// задание 45 ЦЕПОЧКИ МЕТОДОВ (ЧЕЙНИНГ, CHAINING)
// Дополни код так, чтобы в переменной names получился массив имён авторов в алфавитном порядке, рейтинг книг которых больше значения переменной MIN_BOOK_RATING.
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  },
  { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
  {
    title: "The Dreams in the Witch House",
    author: "Howard Lovecraft",
    rating: 8.67,
  },
];
const MIN_BOOK_RATING = 8;
// Change code below this line

const names = books
    .filter(elem => elem.rating > MIN_BOOK_RATING)
    .map(book => book.author)
    .sort((a, b) => a.localeCompare(b));


// задание 46 Дополни функцию getNamesSortedByFriendCount(users) так, чтобы она возвращала массив имён пользователей отсортированный по возрастанию количества их друзей (свойство friends).
// Change code below this line
const getNamesSortedByFriendCount = users => {
   return [...users]
   .sort((a, b) => a.friends.length - b.friends.length)
   .map(user => user.name)
};
// Change code above this line


// задание 47 Дополни функцию getSortedFriends(users) так, чтобы она возвращала массив уникальных имён друзей (свойство friends) отсортированный по алфавиту .
// Change code below this line
const getSortedFriends = users => {
   return [...users].flatMap(user => user.friends)
   .filter((friend, index, users) => users.indexOf(friend) === index)
   .sort((userA, userB) => userA.localeCompare(userB))
};
// Change code above this line


// задание 48 Дополни функцию getTotalBalanceByGender(users, gender) так, чтобы она возвращала общий баланс пользователей (свойство balance), пол которых (свойство gender) совпадает со значением параметра gender.
// Change code below this line
const getTotalBalanceByGender = (users, gender) => { return [...users]
.filter(users => users.gender === gender)
.reduce((total, user) => total + user.balance, 0);};
// Change code above this line
