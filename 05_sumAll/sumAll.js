const sumAll = function(numOne, numTwo) {
    let sum = 0;
    let smallNum;
    let bigNum;

    if (typeof numOne !== "number" || typeof numTwo !== "number") {
        return "ERROR";
    }
    
    // Put inputs in the correct order for the for loop
    if (numOne < numTwo) {
        smallNum = numOne;
        bigNum = numTwo;
    } else {
        smallNum = numTwo;
        bigNum = numOne;
    }

    for (let i = smallNum; i <= bigNum; i++) {
        sum += i;
    }

    if (sum < 0) {
        return "ERROR";
    } else {
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
