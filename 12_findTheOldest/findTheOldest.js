const findTheOldest = function (arr) {
  // Add age to person properties
  for (let person in arr) {
    let personObject = arr[person];
    if (personObject.yearOfDeath === undefined) {
      let year = new Date().getFullYear();
      personObject.age = year - personObject.yearOfBirth;
    } else {
      personObject.age = personObject.yearOfDeath - personObject.yearOfBirth;
    }
  }

  function compare(personOne, personTwo) {
    if (personOne.age > personTwo.age) return 1;
    if (personOne.age == personTwo.age) return 0;
    if (personOne.age < personTwo.age) return -1;
  }

  arr.sort(compare);

  return arr[arr.length - 1];
};

// Do not edit below this line
module.exports = findTheOldest;
