'use strict';


//Prompt if statments
let name = prompt("What's the 'official' name of Javascript?", '');

if (name == 'ECMAScript') {
  alert('Correct');
} else {
  alert("You didn't know? ECMAScript");
}

let browser = prompt("What browser do you use?", '');

//Prompt if statments using Logical Operators
if (browser == 'Edge') {
  alert("You've go the edge!")
}
else if (browser == 'Chrome' ||
  browser == 'Firefox' ||
  browser == 'Safari' ||
  browser == 'Opera') {
  alert('Okay we support these browsers too');
}
 else {
  alert('We hope this page looks ok!')
}

// Prompt using switch
let a = +prompt('a?', '');

switch (a) {
  case 0:
    alert(0);
    break;

  case 1:
    alert(1);
    break;

  case 2:
  case 3:
    alert('2,3')
    break;
  }
