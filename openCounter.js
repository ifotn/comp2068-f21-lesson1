// create open (non-closure) function for a counter
function openFunction() {
    let counter = 0;
    counter++;
    console.log(counter)
}

// run the function twice
openFunction()
openFunction()