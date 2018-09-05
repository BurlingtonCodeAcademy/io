const readline = require('readline');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}

start()

async function start() {
  console.log()
  let name = await ask("what is your name? ")
  let quest = await ask("what is your quest? ")
  let color = await ask("what is your favorite color? ")
  console.log("Hello " + name + "! " + 
    "Good luck with " + quest + ", " +
    "and here is a " + color + " flower for you.");
  process.exit() 
}

