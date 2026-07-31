let ages = [15, 20, 12, 18, 25, 30, 10];

const getAdults = (arr) => {
  return arr.filter((age) => age >= 18);
};

let adultAges = getAdults(ages);

console.log(adultAges);
