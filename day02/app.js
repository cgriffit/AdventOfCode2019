const program = [1,0,0,3,1,1,2,3,1,3,4,3,1,5,0,3,2,9,1,19,1,19,5,23,1,9,23,27,2,27,6,31,1,5,31,35,2,9,35,39,2,6,39,43,2,43,13,47,2,13,47,51,1,10,51,55,1,9,55,59,1,6,59,63,2,63,9,67,1,67,6,71,1,71,13,75,1,6,75,79,1,9,79,83,2,9,83,87,1,87,6,91,1,91,13,95,2,6,95,99,1,10,99,103,2,103,9,107,1,6,107,111,1,10,111,115,2,6,115,119,1,5,119,123,1,123,13,127,1,127,5,131,1,6,131,135,2,135,13,139,1,139,2,143,1,143,10,0,99,2,0,14,0];

const intcodeProgram = (program, address1, address2) => {
    // create a new copy of the array
    const programCopy = [...program];
    programCopy[1] = address1;
    programCopy[2] = address2;
    for (let i = 0; i < programCopy.length; i += 4) {
        if (programCopy[i] === 1) {
            let sum = 0;
            // get the values to add together
            sum = programCopy[programCopy[i + 1]] + programCopy[programCopy[i + 2]];
            // reassign the value at specified index to be the sum
            programCopy[programCopy[i + 3]]  = sum;
        } else if (programCopy[i] === 2) {
            let product = 1;
            // get the values to multiply together
            product = programCopy[programCopy[i + 1]] * programCopy[programCopy[i + 2]];
            // reassign the value at specified index to be the product
            programCopy[programCopy[i + 3]] = product;
        } else if (programCopy[i] === 99) {
            break;
        }
    }
    return programCopy;
}

// loop through values 0 - 99 for indices 1 and 2 of program array
for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 100; j++) {
        let newProgram = intcodeProgram(program, i, j);
        // check if value at first index matches specified value
        if (newProgram[0] === 19690720) {
            console.log(i, j);
            break;
        }
    }
}