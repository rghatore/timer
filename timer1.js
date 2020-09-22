// process.stdout.write('\x07');
// example usage: node timer1.js 10 3 5 15 asd 15
// ignore NaNs and repeated numbers - beep at other values in seconds

let timers = process.argv.slice(2);

for (let alarm of timers) {
  if (!Number.isNaN(Number(alarm)) && (Number(alarm) >= 0)) {
    setTimeout(() => process.stdout.write('\x07'), Number(alarm) * 1000);
  }
}

/* THE FOLLOWING IS OUTSIDE THE SCOPE OF THE ACTIVITY
 * Refactoring to ignore the duplicates
const numbers = input => {
  const output = [];
  for (let each of input) {
    output.push(Number(each));
  }
  return output;
}

const filterNumbers = num => {
  return num.filter(each => !Number.isNaN(each));
}

let timers = filterNumbers(numbers(input));

let alarm = timers.shift();
console.log(alarm);
console.log(timers);
if (timers.includes(alarm)) {
  timers = timers.filter(item => item !== alarm);
}
console.log(timers);
*/