let args = process.argv[2];

let x = parseInt(args);

if(isNaN(x)) {
  console.log("Missing size");
} else {
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < x; j++) {
      process.stdout.write("X");
    }
    console.log("");
  }
}