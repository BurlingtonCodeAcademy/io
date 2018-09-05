const readline = require('readline-promise');

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
    
const ask = readlineInterface.questionAsync;

console.log({ask})

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

