// Prints My number: <first argument converted in integer> if the first argument can be converted to an integer

let args = process.argv[2];
let num = parseInt(args);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log(`My number: ${num}`);
}