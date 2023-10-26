const findTheOldest = function (arr) {
  for (let person in arr) {
    let personObject = arr[person];
    if (personObject.yearOfDeath === undefined) {
      let year = new Date().getFullYear;
      personObject.age = year - personObject.yearOfBirth;
    } else {
      personObject.age = personObject.yearOfDeath - personObject.yearOfBirth;
    }
  }
  console.log(arr);
};

// Do not edit below this line
module.exports = findTheOldest;
