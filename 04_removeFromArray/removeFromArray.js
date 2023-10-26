const removeFromArray = function(arrayToFilter) {
    let filteredArray = arrayToFilter;
    for (let i = 0; i < arguments.length; i++) {
        filteredArray = filteredArray.filter(item => item !== arguments[i]);
    }
    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
