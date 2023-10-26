const palindromes = function (str) {
    let string = str.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g,"");
    let arr = string.split("");
    for (i = 0; i < arr.length / 2; i++) {
        let forwardChar = arr[i];
        let backwardChar = arr[arr.length - (1 + i)];
        if (forwardChar !== backwardChar) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
