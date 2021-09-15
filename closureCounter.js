// use a closure as a wrapper so the var only gets created once in memory
function closureFunction() {
    let counter = 0;

    // use a 2nd var and assign to a child function
    let increment = () => {
        counter++;
        console.log(counter);
    }

    return increment;
}

// assign a var to the closure function but it doesn't execute right away
let countMe = closureFunction();

// execute the function twice
countMe();
countMe();

