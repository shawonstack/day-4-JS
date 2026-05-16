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
