let args = process.argv[2];

let x = parseInt(args);
if (isNaN(x)) {
  console.log("Missing number of occurrences");
} else {
  for (let i = 0; i < x; i++) {
    console.log("C is fun");
  }
}

  