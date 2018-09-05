console.log("what is your name?")
process.stdin.once('data', (name) => {
    console.log("what is your quest?")
    process.stdin.once('data', (quest) => {
    console.log("what is your favorite color?")
        process.stdin.once('data', (color) => {
            console.log("Hello " + name + "! " + 
            "Good luck with " + quest + 
            "and here is a " + color + " flower for you.");
            process.exit();
        });
    });
});
