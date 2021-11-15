//задание 1 СОЗДАНИЕ ОБЪЕКТА
const apartment = {
imgUrl: "https://via.placeholder.com/640x480",
descr: "Spacious apartment in the city center",
rating: 4,
price: 2153,
  tags: ["premium", "promoted", "top"],
};

//задание 2 ВЛОЖЕННЫЕ СВОЙСТВА
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};


//задание 3 ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ ТОЧКУ
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line


//задание 4 ДОСТУП К ВЛОЖЕННЫМ СВОЙСТВАМ
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[2];
// Change code above this line


//задание 5 ДОСТУП К СВОЙСТВАМ ЧЕРЕЗ КВАДРАТНЫЕ СКОБКИ
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
};

// Change code below this line
const aptRating = apartment["rating"];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

//задание 6 ИЗМЕНЕНИЕ ЗНАЧЕНИЯ СВОЙСТВА
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
  tags: ["premium", "promoted", "top"],
  owner: {
    name: "Henry",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = "Henry Sibola";
apartment.tags.push("trusted");
// Change code below this line


//задание 7 ДОБАВЛЕНИЕ СВОЙСТВ
const apartment = {
  imgUrl: "https://via.placeholder.com/640x480",
  descr: "Spacious apartment in the city center",
  rating: 4.7,
  price: 5000,
  tags: ["premium", "promoted", "top", "trusted"],
  owner: {
    name: "Henry Sibola",
    phone: "982-126-1588",
    email: "henry.carter@aptmail.com",
  },
};
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {
country: "Jamaica",
city: "Kingston",
}
// Change code below this line


//задание 8 КОРОТКИЕ СВОЙСТВА
const name = "Repair Droid";
const price = 2500;
const image = "https://via.placeholder.com/640x480";
const tags = ["on sale", "trending", "best buy"];

const product = {
  // Change code below this line
	name,
	price,
	image,
	tags,

  // Change code above this line
};


//задание 9 ВЫЧИСЛЯЕМЫЕ СВОЙСТВА
const emailInputName = "email";
const passwordInputName = "password";

const credentials = {
  // Change code below this line
[emailInputName]: "henry.carter@aptmail.com",
  [passwordInputName]: "jqueryismyjam",
  // Change code above this line
};


//задание 10 ЦИКЛ FOR...IN (Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а в массив values все значения его свойств.)
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line
for (const key in apartment) {
keys.push(key);
values.push(apartment[key]);
}


//задание 11 МЕТОД HASOWNPROPERTY()
const keys = [];
const values = [];
const advert = {
  service: "apt",
};
const apartment = Object.create(advert);
apartment.descr = "Spacious apartment in the city center";
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
if (apartment.hasOwnProperty(key)) {
  keys.push(key);
  values.push(apartment[key]);
}
  // Change code above this line
}

//задание 12 ПОДСЧЁТ СВОЙСТВ
function countProps(object) {
  let propCount = 0;
  // Change code below this line
  for (const key in object) {
if(object.hasOwnProperty(key)){
  propCount += 1;}
  }
  // Change code above this line
  return propCount;
}

//задание 13 МЕТОД OBJECT.KEYS()
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {

values.push(apartment[key])
}

//задание 14  ПОДСЧЁТ СВОЙСТВ 2.0 Выполни рефакторинг функции (задание 12) countProps(object) используя метод Object.keys() и, возможно, но необязательно, цикл for...of.
function countProps(object) {
  // Change code below this line
  let propCount = 0;
  
  const keys = Object.keys(object);

  for (const key of keys) {

    propCount += 1;
  }

  return propCount;
  // Change code above this line
}

//задание 15 МЕТОД OBJECT.VALUES() возвращает массив значений его собственных свойств
const apartment = {
  descr: "Spacious apartment in the city center",
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);


//задание 16 РАСХОДЫ НА ЗАРПЛАТУ
function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Change code below this line

  const values = Object.values(salaries);
  
    for (const value of values) {

      totalSalary += value;
      
}
  // Change code above this line
  return totalSalary;
}

//задание 17 МАССИВ ОБЪЕКТОВ Перебери массив объектов colors используя цикл for...of. Добавь в массив hexColors значения свойств hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line

for (const color of colors) {
  hexColors.push(color.hex);
 }
for (const color of colors) {
  rgbColors.push(color.rgb);}


//задание 18 ПОИСК ОБЪЕКТА ПО ЗНАЧЕНИЮ СВОЙСТВА
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  // Change code below this line
for (const product of products) {
  if (productName === product.name) {
 return product.price;
  }
}

return null;
  // Change code above this line
}


//задание 19 КОЛЛЕКЦИЯ ЗНАЧЕНИЙ СВОЙСТВА
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Change code below this line
const result = []; 
  for(const el of products) { 
    if (el.hasOwnProperty(propName))
      result.push(el[propName])
  }
  return result
  // Change code above this line
}


//задание 20 Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName - название товара. Функция должна вернуть общую стоимость (цена * количество) товара с таким именем из массива products.
const products = [
  { name: "Radar", price: 1300, quantity: 4 },
  { name: "Scanner", price: 2700, quantity: 3 },
  { name: "Droid", price: 400, quantity: 7 },
  { name: "Grip", price: 1200, quantity: 9 },
];

function calculateTotalPrice(productName) {
  // Пиши код ниже этой строки
let result = 0;
  for (const product of products) {
    if (product.name === productName) {
return product.price * product.quantity;
  }
  }
return 0;
  // Пиши код выше этой строки
}


//задание 21 ДЕСТРУКТУРИЗАЦИЯ ОБЪЕКТОВ
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line
// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;
const {yesterday, today, tomorrow} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;



//задание 22 ЗНАЧЕНИЯ ПО УМОЛЧАНИЮ
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
const meanTemperature = (yesterday + today + tomorrow) / 3;



//задание 23 ИЗМЕНЕНИЕ ИМЕНИ ПЕРЕМЕННОЙ При деструктуризации можно изменить имя переменной в которую распаковывается значение свойства. Сначала пишем имя свойства из которого хотим получить значение, после чего ставим двоеточие и пишем имя переменной в которую необходимо поместить значение этого свойства.
const highTemperatures = {
  yesterday: 28,
  today: 26,
  tomorrow: 33,
};
// Change code below this line

const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// Change code above this line
const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;



//задание 24 ДЕСТРУКТУРИЗАЦИЯ В ЦИКЛАХ
const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#2196f3", rgb: "33,150,243" },
  { hex: "#4caf50", rgb: "76,175,80" },
  { hex: "#ffeb3b", rgb: "255,235,59" },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const {hex, rgb} of colors) {
  hexColors.push(hex);
  rgbColors.push(rgb);
}


//задание 25 ГЛУБОКАЯ ДЕСТРУКТУРИЗАЦИЯ
const forecast = {
  today: {
    low: 28,
    high: 32,
    icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
  },
  tomorrow: {
    low: 27,
    high: 31,
  },
};
// Change code below this line
const {today: {low:lowToday, 
               high:highToday, 
               icon:todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"},
      tomorrow: { high: highTomorrow,
                  low: lowTomorrow,
                  icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" },
} = forecast;
    

//задание 26 ПАТТЕРН «ОБЪЕКТ НАСТРОЕК»
// Change code below this line
function calculateMeanTemperature(forecast) {
  const {today: {low: todayLow, high: todayHigh},
  		 tomorrow: {low: tomorrowLow, high: tomorrowHigh}} = forecast;
  // Change code above this line
  return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
}

//задание 27 ОПЕРАЦИЯ SPREAD ПРИ ПЕРЕДАЧЕ АРГУМЕНТОВ
const scores = [89, 64, 42, 17, 93, 51, 26];
// Change code below this line
const bestScore = Math.max(...scores);
const worstScore = Math.min(...scores);



//задание 28 ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО МАССИВА
const firstGroupScores = [64, 42, 93];
const secondGroupScores = [89, 14, 51, 26];
const thirdGroupScores = [29, 47, 18, 97, 81];
// Change code below this line
const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
const bestScore = Math.max(...allScores);
const worstScore = Math.min(...allScores);


//задание 29 ОПЕРАЦИЯ SPREAD ПРИ СОЗДАНИИ НОВОГО ОБЪЕКТА
const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};
// Change code below this line
const finalSettings = { ...defaultSettings, ...overrideSettings };



//задание 30 kАРТОЧКИ ЗАДАЧ
function makeTask(data) {
  const completed = false;
  const category = "General";
  const priority = "Normal";
  // Change code below this line
return {completed, priority, category, ...data}
  // Change code above this line
}



//задание 31 ОПЕРАЦИЯ REST ДЛЯ СБОРА ВСЕХ АРГУМЕНТОВ ФУНКЦИИ
// Change code below this line
function add(...args) {
  let total = 0;

  for (const arg of args) {
    total += arg;
  }

  return total;
  // Change code above this line
}


//задание 32 ОПЕРАЦИЯ REST ДЛЯ СБОРА ЧАСТИ АРГУМЕНТОВ ФУНКЦИИ
// Change code below this line
function addOverNum(maxNumbers,...args) {
  let total = 0;

  for (const arg of args) {
    if (arg > maxNumbers){
    total += arg;}
  }

  return total;
  // Change code above this line
}


//задание 33 МАССИВ СОВПАДЕНИЙ Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.
// Change code below this line
function findMatches(array, ...args) {
  const matches = []; // Don't change this line
for (const number of args) {
  if (array.includes(number)){
    matches.push(number)}
}
  // Change code above this line
  return matches;
}


//задание 37 Добавь объекту atTheOldToad метод getPotions(), который просто возвращает значение свойства potions.
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  // Change code below this line
  getPotions () {
return this.potions;
  }
  // Change code above this line
};



//задание 38 Дополни метод addPotion(potionName) так, чтобы он добавлял зелье potionName в конец массива зелий в свойстве potions.
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  addPotion(potionName) {
    // Change code below this line
this.potions.push(potionName);
    // Change code above this line
  },
};




//задание 39 Дополни метод removePotion(potionName) так, чтобы он удалял зелье potionName из массива зелий в свойстве potions.
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  removePotion(potionName) {
    // Change code below this line
let inPotionName = this.potions.indexOf(potionName);
  this.potions.splice(inPotionName, 1);
    // Change code above this line
  },
};




//задание 40 Дополни метод updatePotionName(oldName, newName) так, чтобы он обновлял название зелья с oldName на newName, в массиве зелий в свойстве potions.
const atTheOldToad = {
  potions: ["Speed potion", "Dragon breath", "Stone skin"],
  updatePotionName(oldName, newName) {
    // Change code below this line
this.potions.splice(this.potions.indexOf(oldName), 1, newName)

    // Change code above this line
  },
};




//задание 41 Выполни рефакторинг методов объекта atTheOldToad так, чтобы они работали не с массивом строк, а с массивом объектов.
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
addPotion(newPotion) {
    for(const potion of this.potions) {
    if (potion.name.includes(newPotion.name)) {
     return `Error! Potion ${newPotion.name} is already in your inventory!`;
    }
    }
     this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (const potion of this.potions) {
      if (potion.name === potionName) {
        this.potions.splice(this.potions.indexOf(potion), 1)
      }
    }
    return `Potion ${potionName} is not inventory!`
  },
  updatePotionName(oldName, newName) {
    for (const potion of this.potions) {
      if (potion.name === oldName) {
        potion.name = newName
      }
    }
    return `Potion ${oldName} is not in inventory!`
  },
  // Change code above this line
};