// const { use } = require('react');

const age = 12;
if (age >= 18) {
  console.log('adult');
} else {
  console.log('minor');
}
//more condition  for check
let number = 35;
if (number >= 80 && number < 100) {
  console.log('you got A+');
} else if (number >= 70 && number <= 79) {
  console.log('you got A');
} else if (number >= 60 && number <= 69) {
  console.log('you got A-');
} else if (number >= 50 && number <= 59) {
  console.log('you got B');
} else if (number >= 40 && number <= 49) {
  console.log('you got C');
} else if (number >= 33 && number <= 39) {
  console.log('you got D');
} else {
  console.log('you are fail');
}
// real web app email login issue
let email = 'shawon@gmail.com';
let password = 12134;
if (email == 'shawon@gmail.com' && password == 12134) {
  console.log('login successfull');
} else {
  console.log('invalid email and password! please enter correct one');
}

// dark mood on off issue
let darkMode = true;
if (darkMode == true) {
  console.log('Dark theme applied');
} else {
  console.log('light theme applied');
}
// ecommerce website discount
let totalShoppingTk = 2300;
if (totalShoppingTk >= 5000) {
  console.log('25% discount');
} else if (totalShoppingTk >= 2000) {
  console.log('15% discount');
} else if (totalShoppingTk >= 1500) {
  console.log('5% discount');
} else {
  console.log('No discount available in this price');
}

// from releted issue
let username = 'shason';
if (username === '') {
  console.log('No username applied');
} else if (username == 'shawon') {
  console.log('username applied');
} else {
  console.log('incorrect username!!');
}
//  swith case
let day = 2;
switch (day) {
  case 1:
    console.log('satrday');
    break;

  case 2:
    console.log('sunday');
    break;

  default:
    console.log('invalid day');
}

// user role system
let user = 'admin';
switch (user) {
  case 'admin':
    console.log('full access');
    break;
  case 'moderetor':
    console.log('can editor');
    break;
  case 'visitor':
    console.log('no one will allow the database');
    break;
  default:
    console.log('anyone can visit');
}

//nested conition-- mean uisng an if inside in another if conition
let age2 = 20;
let isStudent = true;
if (age2 >= 18) {
  if (isStudent == true) {
    console.log('he is a pure intermidiat stdent');
  }
}

let fruit = 'apple';
let amdami = 'usa';
if (fruit == 'apple') {
  if (amdami == 'usa') {
    console.log('good apple');
  }
}

let money = 500;
let ticket = true;

if (money >= 300) {
  if (ticket) {
    console.log('You can enter');
  } else {
    console.log('Buy ticket first');
  }
} else {
  console.log('Not enough money');
}

// gaurd condition
let islogin = true;
if (!islogin) {
  console.log('please login');
  return;
}
console.log('show dashboard');

function productUser(user) {
  if (!user) {
    console.log('login first');
    return;
  }
  if (user.balance > 500) {
    console.log('not enough balance');
    return;
  }
  console.log('purcess success');
}
productUser(false);

function watchMovie(age) {
  if (age < 18) {
    console.log('not allowed');
    return;
  }
  console.log('welcome! You can watch movie');
}
watchMovie(23);
