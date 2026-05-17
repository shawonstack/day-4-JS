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
