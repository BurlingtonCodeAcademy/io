const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// readline helper function --
// asks a question, returns a promise for the answer
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

// main program here
start()

async function start() {
  let name = await ask("What is your name?");
  console.log("Hello, " + name + "!");
  process.exit();
}

