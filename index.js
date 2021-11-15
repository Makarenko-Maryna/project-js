// задание 4
// const pricePerItem = 3500;
// const orderedQuantity = 4;
// // Change code below this line
// const totalPrice = pricePerItem * pricePerItem;


// // задание 5
// const productName = "Droid";
// const pricePerItem = 3500;
// // Change code below this line
// const message = "You picked Droid, price per item is 3500 credits"


// задание 6
const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;
console.log(message);

//задание 7 ФУНКЦИЯ в модуле 4
function sayHi () {
  console.log("Hello, this is my first function!");
}
sayHi();

//задание 8 ФУНКЦИЯ в модуле 4
function add(a, b, c) {
  console.log(`Addition result equals ${a+b+c}`);
  // Change code above this line
}
add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

//задание 9
function add(a, b, c) {
return a + b + c;
}
add(2, 5, 8); // 15
console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

//задание 10
function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};
makeMessage('Radar', 6150);
makeMessage('Scanner', 3500);
makeMessage('Reactor', 8000);
makeMessage('Engine', 4070);


//задание 11
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};
calculateTotalPrice(5, 100);
calculateTotalPrice(8, 60);
calculateTotalPrice(3, 400);
calculateTotalPrice(1, 3500);
calculateTotalPrice(12, 70);


//задание 12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
const message = `You ordered droids worth ${orderedQuantity * pricePerDroid + deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`
  // Change code above this line
  return message;
}
makeOrderMessage(2, 100, 50);
makeOrderMessage(4, 300, 100);
makeOrderMessage(10, 70, 200);

//задание 13
function isAdult(age) {
  // Change code below this line
  const passed = (age >= 18);

  // Change code above this line
  return passed;
}
age = 20;
age = 14;
age = 8;
age = 37;

//задание 14

//задание 18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
const totalPrice = pricePerDroid * orderedQuantity;
  if (totalPrice > customerCredits) {
  message = "Insufficient funds!"
  } else {
  message = `You ordered ${orderedQuantity} droids, you have ${customerCredits - totalPrice} credits left`
  }
  // Change code above this line
  return message;
}
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));
console.log(makeTransaction(500, 10, 5000));


//задание 19
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  if (password === null) { // Change this line
    message =  'Canceled by user!';
  } else if (ADMIN_PASSWORD === password) { // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }
  return message;
}
console.log(checkPassword("mangohackzor"));
console.log(checkPassword("null"));
console.log(checkPassword("polyhax"));
console.log(checkPassword("jqueryismyjam"));


//задание 20
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
if (ordered === 0) {
  message = "There are no products in the order!"
} else if (available < ordered) {
  message = "Your order is too large, there are not enough items in stock!"
} else {
  message = "The order is accepted, our manager will contact you"
}
  // Change code above this line
  return message;
}
console.log(checkStorage(100, 50));
console.log(checkStorage(100, 130));
console.log(checkStorage(70, 0));
console.log(checkStorage(200, 20));
console.log(checkStorage(200, 250));
console.log(checkStorage(150, 0));


//задание 21
function isNumberInRange(start, end, number) {
  const isInRange = (start <= number && number <= end); // Change this line

  return isInRange;
}


//задание 22
function checkIfCanAccessContent(subType) {
  const canAccessContent = ("pro" === subType || "vip" === subType); // Change this line

  return canAccessContent;
}


//задание 23
function isNumberNotInRange(start, end, number) {
 const isInRange = number >= start && number <= end;
 const isNotInRange = !(number >= start && number <= end);
 return isNotInRange
}
 

// задание 24
function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
if (totalSpent >= 50000) {
  {discount = GOLD_DISCOUNT};
} else if (totalSpent >= 20000 && totalSpent < 50000) {
  {discount = SILVER_DISCOUNT};
} else if (totalSpent >= 5000 && totalSpent < 20000) {
  {discount = BRONZE_DISCOUNT};
} else 
  {discount = BASE_DISCOUNT};
  // Change code above this line
  return discount;
}
console.log(getDiscount(137000));
console.log(getDiscount(46900));
console.log(getDiscount(8250));
console.log(getDiscount(1300));
console.log(getDiscount(5000));


// задание 25
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";
  // Change code above this line
  return message;
}


// задание 26
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
message = password === ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
  // Change code above this line
  return message;
}

//  задание 27
// изначальный вид
if (type === "starter") {
  price = 0;
} else if (type === "professional") {
  price = 20;
} else if (type === "organization") {
  price = 50;
}
// после рефакторинга
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line
 switch (type) { // Change this line
    case "starter": // Change this line
      price = 0; // Change this line
      break;
    case "professional": // Change this line
      price = 20; // Change this line
      break;
    case "organization": // Change this line
      price = 50; // Change this line
      break;
  }
  // Change code above this line
  return price;
}


//  задание 28
// изначальный код
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  if (password === null) {
    message = "Canceled by user!";
  } else if (password === ADMIN_PASSWORD) {
    message = "Welcome!";
  } else {
    message = "Access denied, wrong password!";
  }
  // Change code above this line
  return message;
}
// после рефакторинга
function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;
  // Change code below this line
  switch (password) {
    case null:      
    message = "Canceled by user!";
      break;
    case ADMIN_PASSWORD:
    message = "Welcome!";
      break;
    default: 
    message = "Access denied, wrong password!";
  }
  // Change code above this line
  return message;
}
// задание 29
function getShippingCost(country) {
  let message;
  // Change code below this line
switch(country) {
  case "China":
    price = 100;
    message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Chile":
    price = 250;
     message = `Shipping to ${country} will cost ${price} credits`;
    break;
  case "Australia":
    price = 170;
     message = `Shipping to ${country} will cost ${price} credits`;
	break;
  case "Jamaica":
    price = 120;
     message = `Shipping to ${country} will cost ${price} credits`;
    break;
  default:
    message = "Sorry, there is no delivery to your country";
}
  // Change code above this line
  return message;
}


// задание 30
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}
console.log(getNameLength("Poly"));
console.log(getNameLength("Harambe"));
console.log(getNameLength("Billy"));
console.log(getNameLength("Joe"));


// задание 31
const courseTopic = "JavaScript essentials";
// Change code below this line
const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length -1];
// Change code above this line


// задание 32
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line
  return substring;
}
console.log(getSubstring("Hello world", 3));
console.log(getSubstring("Hello world", 6));
console.log(getSubstring("Hello world", 8));
console.log(getSubstring("Hello world", 11));
console.log(getSubstring("Hello world", 0));


// задание 33
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
if (message.length <= maxLength) {
result = message;
} else {
result = message.slice (0, maxLength) + ('...')
}
  /// Change code above this line
  return result;
}

// задание 34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line
  return normalizedInput;
}


// задание 35
function checkForName(fullName, name) {
 const result = fullName.includes(name); // Change this line
  return result;
}

// задание 36
function checkForSpam(message) {
  let result;
  // Change code below this line
result = message.toLowerCase().includes('spam') || message.toLowerCase().includes('sale');
  // Change code above this line
  return result;
}