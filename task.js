//task1
let score = 90;
if (score >= 90 && score < 101) {
  console.log('A+');
} else if (score >= 80 && score <= 89) {
  console.log('A');
} else if (score >= 70 && score <= 79) {
  console.log('B');
} else if (score >= 60 && score <= 69) {
  console.log('C');
} else if (score >= 50 && score <= 59) {
  console.log('D');
}

//task2
let day = 5;
switch (day) {
  case 1:
    console.log('saturday');
    break;
  case 2:
    console.log('sunday');
    break;
  case 3:
    console.log('monday');
    break;

  case 4:
    console.log('twesday');
    break;
  case 5:
    console.log('wednesday');
    break;
  case 6:
    console.log('thusday');
    break;
  case 7:
    console.log('friday');
    break;
  default:
    console.log('no date is mentioned');
}

let name = 'shawn';
switch (name) {
  case 'shawon':
    console.log('accept');
  case 'shawn':
    console.log('not accept');
}

function market(user) {
  if (!user || user.balance === undefined) {
    console.log('invalid user');
    return;
  } else {
    console.log('not shopping');
  }
}
market('shawon');
//task 5
// for (let num = 1; num <= 100; num++) {
//   if (num % 3 == 0 && num % 5 == 0) {
//     console.log('FizBuzz');
//   } else if (num % 3 == 0) {
//     console.log('fizz');
//   } else if (num % 5 == 0) {
//     console.log('Buzz');
//   } else {
//     console.log(num);
//   }
// }
//task6 nested
let season = 'january';
let temp = 30;
if (season) {
  if (temp == 30) {
    console.log('sumemr');
  } else if (temp == 20) {
    console.log('winter');
  } else {
    console.log('not defined');
  }
}

let season1 = 'january';
let temp1 = 20;
if (season1 == 'january') {
  if (temp >= 18) {
    console.log('winter season');
  } else if (temp >= 30) {
    console.log('sumemr season');
  } else {
    console.log('undefend');
  }
}
// task7
let username = 'abdul';
let password = 1234;
if (username == 'abdul' && password == 1234) {
  console.log('login successful');
} else if (username == 'abdul' && password == 2345) {
  console.log('password wrong. Enter RIght one');
} else if (username == 'motin' && password == 1234) {
  console.log('incorrect username');
} else {
  console.log('invalid credintails');
}
// task8
let command = 'start';
switch (command) {
  case 'start':
    console.log('command start');
    break;
  case 'pause':
    console.log('command oaused');
    break;
  case 'stop':
    console.log('command stopped');
    break;
  default:
    console.log('command not valid');
}
//task9
let user = {
  name: 'shaon',
  age: 22,
  email: 'shawon@gmail.com',
};
if (user.name && user.age && user.email) {
  console.log('all data exicts');
} else {
  console.log('data missing');
}

// age >= 18 && hasID? 'Enter', age >= 18 && !hasID? 'Need ID', else 'Too young' — implement করো
let age = 18;
let hasID = true;
if (age >= 18 && hasID == true) {
  console.log('Enter');
} else if (age >= 18 && !hasID) {
  console.log('need ID');
} else {
  console.log('too young');
}

// একটি BMI calculator বানাও: BMI বের করো, তারপর category print করো (Underweight/Normal/Overweight/Obese)
let weight = 61;
let height = 1.77;
let bmi = weight / (height * height);
if (bmi > 1 && bmi <= 18.5) {
  console.log('Underweight');
} else if (bmi >= 18.6 && bmi <= 24.9) {
  console.log('Normal');
} else if (bmi >= 25 && bmi <= 29.9) {
  console.log('overheight');
} else {
  console.log('Obese');
}
